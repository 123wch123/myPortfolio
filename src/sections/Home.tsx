import GradientText from '@/reactbitComponent/GradientText/GradientText';
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
                <GradientText
                    colors={['#5227FF', '#FF9FFC', '#B497CF']}
                    animationSpeed={8}
                    showBorder={false}
                    className="custom-class"
                    fontSize={140}
                    fontWeight="light"
                    fontFamily="Arial"
                >
                    Design Portfolio
                </GradientText>
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
                    onClick={onNavigateToAbout}
                />
            </div>
        </div>
    );
}