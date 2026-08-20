import Prism from '@/reactbitComponent/Prism/Prism';
import ShinyText from '@/reactbitComponent/ShinyText/ShinyText';
import StrokeText from '@/reactbitComponent/StrokeText/StrokeText';
import { useEffect, useRef, useState } from 'react';
import './Home.css';

interface HomeProps {
    onNavigateToAbout?: () => void;
}

/** 离屏 canvas 墨迹测量缓存 —— resize/ResizeObserver 频繁触发时避免重复全像素扫描 */
const inkCache = new Map<string, { leftInk: number; rightInk: number; advance: number } | null>();

/** 在离屏 canvas 上渲染单个字符并扫描其墨迹左右边缘(相对笔位) */
function measureCharInk(ch: string, font: string): { leftInk: number; rightInk: number; advance: number } | null {
    const key = `${ch}|${font}`;
    const cached = inkCache.get(key);
    if (cached !== undefined) return cached;

    const result = measureCharInkUncached(ch, font);
    inkCache.set(key, result);
    return result;
}

function measureCharInkUncached(ch: string, font: string): { leftInk: number; rightInk: number; advance: number } | null {
    if (typeof document === 'undefined') return null;
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    if (!ctx) return null;

    ctx.font = font;
    const advance = ctx.measureText(ch).width;
    canvas.width = Math.max(2, Math.ceil(advance + 80));
    canvas.height = 200;
    ctx.font = font;
    ctx.fillStyle = '#ffffff';
    const penX = 40;
    ctx.fillText(ch, penX, 100);

    const img = ctx.getImageData(0, 0, canvas.width, canvas.height).data;
    let minX = Infinity;
    let maxX = -Infinity;
    for (let y = 0; y < canvas.height; y++) {
        const row = y * canvas.width;
        for (let x = 0; x < canvas.width; x++) {
            if (img[(row + x) * 4 + 3] > 100) {
                if (x < minX) minX = x;
                if (x > maxX) maxX = x;
            }
        }
    }
    if (minX === Infinity) {
        return { leftInk: 0, rightInk: advance, advance };
    }
    return { leftInk: minX - penX, rightInk: maxX - penX, advance };
}

export default function Home({ onNavigateToAbout }: HomeProps) {
    const strokeTextRef = useRef<HTMLDivElement>(null);
    const nameRef = useRef<HTMLParagraphElement>(null);
    const yearRef = useRef<HTMLParagraphElement>(null);
    const [contentPadding, setContentPadding] = useState({ left: 0, right: 0 });

    // 让 wangchuhong 的 w 与 design 的 d 墨迹左对齐、2026 的 6 与 portfolio 的 o 墨迹右对齐。
    // 通过 canvas 实际渲染来测量字形的墨迹边界（getBoundingClientRect 返回的是笔画起点而非墨迹）
    useEffect(() => {
        const measure = () => {
            const wrapper = strokeTextRef.current;
            const nameEl = nameRef.current;
            const yearEl = yearRef.current;
            if (!wrapper || !nameEl || !yearEl) return;

            const textEl = wrapper.querySelector<SVGTextElement>('.stroke-text__stroke');
            const ctm = textEl?.getScreenCTM();
            if (!textEl || !ctm || ctm.a === 0) return;

            const wrapperRect = wrapper.getBoundingClientRect();
            const textRect = textEl.getBoundingClientRect();
            const cs = getComputedStyle(textEl);
            const fontSize = parseFloat(cs.fontSize) || 128;
            const letterSpacing = parseFloat(cs.letterSpacing) || 0;
            const fontFamily = cs.fontFamily;
            const fontWeight = cs.fontWeight;
            const scale = ctm.a;
            const renderedSize = fontSize * scale;
            const lsRendered = letterSpacing * scale;
            const strokeFont = `${fontWeight} ${renderedSize}px ${fontFamily}`;

            const chars = Array.from(textEl.textContent ?? '');
            if (!chars.length) return;

            // 首字符 D 的墨迹左缘、末字符 o 的墨迹右缘（相对 SVG 笔位）
            const mD = measureCharInk(chars[0], strokeFont);
            const mO = measureCharInk(chars[chars.length - 1], strokeFont);
            if (!mD || !mO) return;

            // 末字符笔位 = 前面字符的 advance 总和 + 每字符间的 letterSpacing
            const ctx = document.createElement('canvas').getContext('2d');
            if (!ctx) return;
            ctx.font = strokeFont;
            let sumBefore = 0;
            for (let i = 0; i < chars.length - 1; i++) {
                sumBefore += ctx.measureText(chars[i]).width;
            }
            const oPenOffset = sumBefore + (chars.length - 1) * lsRendered;

            // w 与 6 按名字/年份自身的字体测量
            const mW = measureCharInk('w', getComputedStyle(nameEl).font);
            const m6 = measureCharInk('6', getComputedStyle(yearEl).font);
            if (!mW || !m6) return;

            // Stroke 描边会向墨迹外侧延伸 strokeWidth/2，按可见边缘对齐时需扣除
            const strokeWidth = parseFloat(textEl.getAttribute('stroke-width') || '0') || 0;
            const strokeHalf = (strokeWidth * scale) / 2;

            const dInkLeftScreen = textRect.left + mD.leftInk;
            const oInkRightScreen = textRect.left + oPenOffset + mO.rightInk;

            const next = {
                left: dInkLeftScreen - wrapperRect.left - mW.leftInk - strokeHalf,
                right: wrapperRect.right - oInkRightScreen - (m6.advance - m6.rightInk) - strokeHalf
            };

            setContentPadding(prev =>
                Math.abs(prev.left - next.left) < 0.5 && Math.abs(prev.right - next.right) < 0.5
                    ? prev
                    : next
            );
        };

        measure();
        if (typeof document !== 'undefined' && document.fonts?.ready) {
            document.fonts.ready.then(measure).catch(() => { });
        }

        // ResizeObserver / resize 用 rAF 节流，避免一次 resize 连续触发多次全像素扫描
        let ro: ResizeObserver | null = null;
        let raf = 0;
        const scheduleMeasure = () => {
            if (raf) return;
            raf = requestAnimationFrame(() => {
                raf = 0;
                measure();
            });
        };

        if (typeof window !== 'undefined' && typeof ResizeObserver !== 'undefined') {
            ro = new ResizeObserver(scheduleMeasure);
            if (strokeTextRef.current) ro.observe(strokeTextRef.current);
            window.addEventListener('resize', scheduleMeasure);
        }

        return () => {
            if (raf) cancelAnimationFrame(raf);
            ro?.disconnect();
            window.removeEventListener('resize', scheduleMeasure);
        };
    }, []);

    return (
        <div className="home-container">

            {/* Prism 背景层 - 仅 Home 页显示，位于所有文字之下 */}
            <div className="home-prism">
                <Prism
                    animationType="rotate"
                    timeScale={0.3}
                    height={3}
                    baseWidth={5.5}
                    scale={3}
                    hueShift={0}
                    colorFrequency={1}
                    noise={0}
                    glow={0.5}
                    suspendWhenOffscreen={true}
                    resolutionScale={0.5}
                />
            </div>

            {/* Stroke 文字层 - 覆盖整个 Home 页，与其他元素产生重叠 */}
            <div ref={strokeTextRef} className="home-stroke-text">
                <StrokeText
                    text="Design Portfolio"
                    strokeColor="#71C4FF"
                    fillColor="#F8FAFC"
                    strokeWidth={1.4}
                    drawDuration={1.6}
                    fillDelay={0.2}
                    stagger={0.05}
                    ease="power2.out"
                    trigger="mount"
                    fillMode="wipe"
                    fontSize={128}
                    fontWeight={800}
                    letterSpacing={-4}
                />
            </div>
            <div
                className="home-content"
                style={{ paddingLeft: contentPadding.left, paddingRight: contentPadding.right }}
            >
                <p ref={nameRef} className="home-text">wangchuhong</p>
                <p ref={yearRef} className="home-year">2026</p>
            </div>
            <div className="home-shiny-text">
                <ShinyText
                    text="View My Work ⬇"
                    speed={2}
                    delay={0}
                    color="#b5b5b5"
                    shineColor="#ffffff"
                    spread={120}
                    direction="left"
                    yoyo={false}
                    pauseOnHover={false}
                    disabled={false}
                    onClick={() => {
                        console.log("ShinyText clicked");
                        onNavigateToAbout?.();
                    }}
                />
            </div>
        </div>
    );
}