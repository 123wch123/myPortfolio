import { useCallback, useEffect, useRef, useState, type MouseEvent as ReactMouseEvent } from 'react';
import './App.css';
import Menu from './components/Menu';
import About from './sections/About';
import Contact from './sections/Contact';
import Home from './sections/Home';
import More from './sections/More';
import ProductDesign from './sections/ProductDesign';
import Project from './sections/Project';
import VrDesign from './sections/VrDesign';

const PAGE_COUNT = 5;
const OVERLAY_HASHES = ['#vr-design', '#product-design'];

export default function App() {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [overlay, setOverlay] = useState<string | null>(() => {
        const hash = window.location.hash;
        return OVERLAY_HASHES.includes(hash) ? hash.slice(1) : null;
    });

    const getCurrentPage = useCallback(() => {
        const el = scrollRef.current;
        if (!el) return 0;
        return Math.round(el.scrollTop / el.clientHeight);
    }, []);

    const navigateToPage = useCallback((index: number) => {
        const el = scrollRef.current;
        if (!el) return;
        const target = Math.max(0, Math.min(PAGE_COUNT - 1, index));
        el.scrollTo({ top: target * el.clientHeight, behavior: 'smooth' });
    }, []);

    // 点击 "View My Work" 平滑滚动到 About 区域(第二屏)
    const scrollToAbout = useCallback(() => {
        const el = scrollRef.current;
        if (!el) return;
        el.scrollTo({ top: el.clientHeight, behavior: 'smooth' });
    }, []);

    // 滚动到指定锚点页面
    const scrollToHash = useCallback((hash: string) => {
        const id = hash.replace('#', '');
        if (!id) return;
        // 双重 rAF 确保 VR Design 已经卸载后再滚动
        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                const el = document.getElementById(id);
                if (el && scrollRef.current) {
                    scrollRef.current.scrollTo({ top: el.offsetTop, behavior: 'smooth' });
                }
            });
        });
    }, []);

    // 处理菜单锚点跳转(#home / #about / #projects / #contact)
    const handleAnchorNavigation = (e: ReactMouseEvent<HTMLDivElement>) => {
        const target = e.target as HTMLElement;
        const anchor = target.closest('a[href^="#"]');
        if (!anchor || !scrollRef.current) return;
        const id = anchor.getAttribute('href')?.slice(1) ?? '';

        // 独立页面打开时：占位链接(#)不触发跳转，保持页面打开
        if (overlay && !id) {
            e.preventDefault();
            return;
        }
        if (!id) return;

        // 如果当前处于独立页面(VR Design / Product Design)且点击的是主页面锚点
        if (overlay) {
            // 点击的是另一个独立页面锚点 → 直接切换独立页面
            if (OVERLAY_HASHES.includes(`#${id}`)) {
                window.location.hash = `#${id}`;
                return;
            }
            e.preventDefault();
            window.location.hash = '';
            // hashchange 监听器会负责关闭独立页面并滚动到目标页面
            scrollToHash(`#${id}`);
            return;
        }

        const el = document.getElementById(id);
        if (!el) return;
        e.preventDefault();
        const top = el.offsetTop;
        scrollRef.current.scrollTo({ top, behavior: 'smooth' });
    };

    // 监听 hash 变化，控制独立页面(VR Design / Product Design)显示
    useEffect(() => {
        const handleHashChange = () => {
            const hash = window.location.hash;
            if (OVERLAY_HASHES.includes(hash)) {
                setOverlay(hash.slice(1));
            } else {
                setOverlay(null);
                if (hash) {
                    scrollToHash(hash);
                }
            }
        };
        window.addEventListener('hashchange', handleHashChange);
        return () => window.removeEventListener('hashchange', handleHashChange);
    }, [scrollToHash]);

    // 键盘方向键切换页面(桌面端便利)
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (overlay) return;
            const target = e.target as HTMLElement | null;
            if (target?.closest('input, textarea, select, [contenteditable="true"]')) return;
            const currentPage = getCurrentPage();
            if (e.key === 'ArrowDown' || e.key === 'PageDown') {
                e.preventDefault();
                navigateToPage(currentPage + 1);
            } else if (e.key === 'ArrowUp' || e.key === 'PageUp') {
                e.preventDefault();
                navigateToPage(currentPage - 1);
            } else if (e.key === 'Home') {
                e.preventDefault();
                navigateToPage(0);
            } else if (e.key === 'End') {
                e.preventDefault();
                navigateToPage(PAGE_COUNT - 1);
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [getCurrentPage, navigateToPage, overlay]);

    return (
        <div className="app-container" onClick={handleAnchorNavigation}>
            <div ref={scrollRef} className="scroll-view">
                <section id="home" className="page" style={{ backgroundColor: '#000000' }}>
                    <Home onNavigateToAbout={scrollToAbout} />
                </section>
                <section id="about" className="page" style={{ backgroundColor: '#000000' }}>
                    <About />
                </section>
                <section id="projects" className="page" style={{ backgroundColor: '#000000' }}>
                    <Project />
                </section>
                <section id="contact" className="page" style={{ backgroundColor: '#000000' }}>
                    <Contact />
                </section>
                <section id="more" className="page" style={{ backgroundColor: '#000000' }}>
                    <More />
                </section>
            </div>

            {/* VR Design 独立页面（覆盖全屏，可滚动查看图片） */}
            {overlay === 'vr-design' && <VrDesign />}

            {/* Product Design 独立页面（AccordionGallery 项目画廊） */}
            {overlay === 'product-design' && <ProductDesign />}

            {/* 全局悬浮菜单 */}
            <Menu />
        </div>
    );
}