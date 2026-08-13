import ShinyText from '@/reactbitComponent/ShinyText/ShinyText';
import StrokeText from '@/reactbitComponent/StrokeText/StrokeText';
import './Home.css';

interface HomeProps {
    onNavigateToAbout?: () => void;
}

export default function Home({ onNavigateToAbout }: HomeProps) {
    return (
        <div className="home-container">
            <div className="home-content">
                <p className="home-text">Chuhong Wang</p>
            </div>

            {/* Stroke 文字层 - 覆盖整个 Home 页，与其他元素产生重叠 */}
            <div className="home-stroke-text">
                <StrokeText
                    text="Design Portfolio"
                    strokeColor="#A78BFA"
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