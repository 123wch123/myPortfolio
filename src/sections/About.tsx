import LogoLoop from '@/reactbitComponent/LogoLoop/LogoLoop';
import ProfileCard from '@/reactbitComponent/ProfileCard/ProfileCard';
import { SiBlender, SiExpo, SiFigma, SiGithub, SiReact, SiTypescript } from 'react-icons/si';
import iconPattern from '../../assets/images/logo-glow.png';
import avatarImg from '../../assets/images/Profile.jpg';
import './About.css';

const techLogos = [
    { node: <SiReact />, title: 'React', href: 'https://react.dev' },
    { node: <SiTypescript />, title: 'TypeScript', href: 'https://www.typescriptlang.org' },
    { node: <SiGithub />, title: 'GitHub', href: 'https://github.com' },
    { node: <SiExpo />, title: 'Expo', href: 'https://expo.dev' },
    { node: <SiFigma />, title: 'Figma', href: 'https://www.figma.com' },
    { node: <SiBlender />, title: 'Blender', href: 'https://www.blender.org' }
];

const timeline = [
    {
        year: '2020.9-2024.7',
        title: 'Beijing University of Technology',
        description: 'Bachelor of Engineering in Industrial Design'
    },
    {
        year: '2025.2-2025.5',
        title: 'Samsung(China)Investment Co.Ltd',
        description: 'Lifestyle lab-CN Industrial Design Intern'
    },
    {
        year: '2025.9- Present',
        title: 'The Hong Kong Polytechnic University',
        description: 'Master of Design in Intelligent system design'
    },
    {
        year: '2026.2- 2026.5',
        title: 'TuZhan Intelligent Technology Co., Ltd.',
        description: 'UI/UX Design Intern'
    }
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
                        Hi, I'm Chuhong Wang, currently pursuing a Master's in Intelligent Systems Design at The Hong Kong Polytechnic University, graduating in 2026. With a background in Industrial Design, I have internship experience at Samsung and Tuzhan AI, where I worked on user research, interaction design, AI products, and design systems. I enjoy combining industrial design with UX thinking to create meaningful user experiences, and I'm always eager to learn new design methods and technologies.
                    </p>
                    <div className="about-detail-grid">
                        <ol className="about-timeline">
                            {timeline.map((item) => (
                                <li key={item.year} className="about-timeline__item">
                                    <span className="about-timeline__marker" aria-hidden="true" />
                                    <div className="about-timeline__content">
                                        <span className="about-timeline__year">{item.year}</span>
                                        <h3 className="about-timeline__title">{item.title}</h3>
                                        <p className="about-timeline__description">{item.description}</p>
                                    </div>
                                </li>
                            ))}
                        </ol>
                        <div className="about-skills">
                            <div className="about-skill-group">
                                <h3 className="about-skill-title">KEY STRENGTHS</h3>
                                <ul className="about-skill-list">
                                    <li>User Research & Insight Synthesis</li>
                                    <li>Interaction & Visual Design</li>
                                    <li>Prototyping & Usability Testing</li>
                                    <li>Cross-disciplinary Collaboration</li>
                                </ul>
                            </div>
                            <div className="about-skill-group">
                                <h3 className="about-skill-title">SOFT SKILLS</h3>
                                <ul className="about-skill-list">
                                    <li>Creative Problem Solving</li>
                                    <li>Adaptability & Fast Learning</li>
                                    <li>Teamwork & Empathy</li>
                                </ul>
                            </div>
                        </div>
                    </div>
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