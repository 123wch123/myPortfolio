import LogoLoop from '@/reactbitComponent/LogoLoop/LogoLoop';
import ProfileCard from '@/reactbitComponent/ProfileCard/ProfileCard';
import { SiExpo, SiGithub, SiReact, SiTypescript, SiVercel, SiVite } from 'react-icons/si';
import iconPattern from '../../assets/images/logo-glow.png';
import avatarImg from '../../assets/images/Profile.jpg';
import './About.css';

const techLogos = [
    { node: <SiReact />, title: 'React', href: 'https://react.dev' },
    { node: <SiTypescript />, title: 'TypeScript', href: 'https://www.typescriptlang.org' },
    { node: <SiVite />, title: 'Vite', href: 'https://vitejs.dev' },
    { node: <SiVercel />, title: 'Vercel', href: 'https://vercel.com' },
    { node: <SiGithub />, title: 'GitHub', href: 'https://github.com' },
    { node: <SiExpo />, title: 'Expo', href: 'https://expo.dev' }
];

export default function About() {
    return (
        <>
            <div className="page-label">About</div>
            <div className="about-container">
                <div className="about-card-section">
                    <ProfileCard
                        name="Chuhong Wang"
                        title=" "
                        handle="chuhongwang"
                        status="Online"
                        contactText="Contact Me"
                        avatarUrl={avatarImg}
                        iconUrl={iconPattern}
                        behindGlowEnabled
                        innerGradient="linear-gradient(145deg,#60496e8c 0%,#71C4FF44 100%)"
                        onContactClick={() => console.log('Contact clicked')}
                    />
                </div>
                <div className="about-content-section">
                    <h2 className="about-title">About Me</h2>
                    <p className="about-description">
                        Hi, I'm Chuhong Wang — a designer and developer passionate about creating
                        immersive digital experiences. I love exploring the intersection of
                        interactive design, animation, and modern web technologies.
                    </p>
                    <p className="about-description">
                        This portfolio showcases a collection of my favorite projects, experiments,
                        and design explorations. Feel free to browse around and get in touch if
                        you'd like to collaborate.
                    </p>
                </div>
            </div>
            <div className="about-logoloop-section">
                <LogoLoop
                    logos={techLogos}
                    speed={60}
                    direction="left"
                    logoHeight={40}
                    gap={56}
                    hoverSpeed={0}
                    scaleOnHover
                    ariaLabel="Technology partners"
                />
            </div>
        </>
    );
}