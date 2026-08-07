import ParticleText from '@/reactbitComponent/ParticleText/ParticleText';
import ShinyText from '@/reactbitComponent/ShinyText/ShinyText';
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

            {/* 粒子层 - 覆盖整个 Home 页，与其他元素产生重叠 */}
            <div className="home-particle-text">
                <ParticleText
                    text="Design Portfolio"
                    particleSize={2}
                    density={4}
                    color="#ffffff"
                    highlightColor="#5227FF"
                    scatter={180}
                    gatherDuration={1600}
                    stagger={420}
                    pointerRepel={40}
                    repelRadius={120}
                    idleDrift={0.7}
                    trigger="mount"
                    fontSize={140}
                    fontWeight={300}
                    fontFamily="Arial"
                    glow
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