import LogoLoop from '@/reactbitComponent/LogoLoop/LogoLoop';
import ProfileCard from '@/reactbitComponent/ProfileCard/ProfileCard';
import { useEffect, useRef } from 'react';
import gardenLogo from '../../assets/companyLogoLoop/garden.png';
import nioLogo from '../../assets/companyLogoLoop/nio.png';
import rabbitpreLogo from '../../assets/companyLogoLoop/rabbitpre.png';
import samsungLogo from '../../assets/companyLogoLoop/samsung.png';
import iconPattern from '../../assets/images/logo-glow.png';
import avatarImg from '../../assets/images/Profile.jpg';
import blenderLogo from '../../assets/softwareLogo/blender.png';
import figmaLogo from '../../assets/softwareLogo/figma.png';
import githubLogo from '../../assets/softwareLogo/github.png';
import solidworksLogo from '../../assets/softwareLogo/solidworks.png';
import vscodeLogo from '../../assets/softwareLogo/VScode.png';
import './About.css';

const companyLogos = [
    { src: gardenLogo, alt: 'Garden', title: 'Garden' },
    { src: nioLogo, alt: 'NIO', title: 'NIO', href: 'https://www.nio.com' },
    { src: rabbitpreLogo, alt: 'RabbitPre', title: 'RabbitPre', href: 'https://www.rabbitpre.com' },
    { src: samsungLogo, alt: 'Samsung', title: 'Samsung', href: 'https://www.samsung.com' }
];

const softwares = [
    { src: figmaLogo, name: 'Figma' },
    { src: vscodeLogo, name: 'VS Code' },
    { src: githubLogo, name: 'GitHub' },
    { src: blenderLogo, name: 'Blender' },
    { src: solidworksLogo, name: 'SolidWorks' }
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
    const aboutRef = useRef<HTMLDivElement>(null);

    // About 屏移出视口时暂停 ProfileCard 的持续 holo 动画，降低后台主线程占用
    useEffect(() => {
        const el = aboutRef.current;
        if (!el || typeof IntersectionObserver === 'undefined') return;

        const observer = new IntersectionObserver(
            (entries) => {
                el.classList.toggle('about--visible', entries.some((entry) => entry.isIntersecting));
            },
            { root: null, threshold: 0 }
        );
        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    return (
        <>
            <div className="page-label">About</div>
            <div ref={aboutRef} className="about-container">
                <div className="about-card-section">
                    <ProfileCard
                        name="Chuhong Wang"
                        title=" "
                        avatarUrl={avatarImg}
                        iconUrl={iconPattern}
                        behindGlowEnabled
                        innerGradient="linear-gradient(145deg,#1E3A8A8c 0%,#71C4FF44 100%)"
                    />
                </div>
                <div className="about-content-section">
                    <h2 className="about-title">About Me</h2>
                    <p className="about-description">
                        Hi, I'm Chuhong Wang, currently pursuing a Master's in Intelligent Systems Design at The Hong Kong Polytechnic University, graduating in 2026. With a background in Industrial Design, I have internship experience at Samsung and Tuzhan AI, where I worked on user research, interaction design, AI products, and design systems. I enjoy combining industrial design with UX thinking to create meaningful user experiences, and I'm always eager to learn new design methods and technologies.
                    </p>
                    <div className="about-detail-grid">
                        <div className="about-timeline-group">
                            <h3 className="about-timeline-title">EXPERIENCE</h3>
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
                        </div>
                        <div className="about-skills">
                            <div className="about-skill-group">
                                <h3 className="about-skill-title">KEY STRENGTHS</h3>
                                <ul className="about-skill-list">
                                    <li>User Research & Insight Synthesis</li>
                                    <li>UI/UX Design</li>
                                    <li>Prototyping & Usability Testing</li>
                                    <li>Product Design</li>
                                </ul>
                            </div>
                            <div className="about-skill-group">
                                <h3 className="about-skill-title">SOFTWARES & SKILLS</h3>
                                <div className="about-software-grid">
                                    {softwares.map((item) => (
                                        <div className="about-software-item" key={item.name}>
                                            <img
                                                src={item.src}
                                                alt={item.name}
                                                className="about-software-icon"
                                                loading="lazy"
                                                draggable={false}
                                            />
                                            <span className="about-software-name">{item.name}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="about-logoloop-section">
                <LogoLoop
                    logos={companyLogos}
                    speed={60}
                    direction="left"
                    logoHeight={40}
                    gap={56}
                    hoverSpeed={0}
                    scaleOnHover
                    ariaLabel="Technology partners"
                    suspendWhenOffscreen
                />
            </div>
        </>
    );
}