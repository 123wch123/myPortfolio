import { useRef, type MouseEvent as ReactMouseEvent } from 'react';
import './App.css';
import Menu from './components/Menu';
import About from './sections/About';
import Contact from './sections/Contact';
import Home from './sections/Home';
import More from './sections/More';
import Project from './sections/Project';

export default function App() {
    const scrollRef = useRef<HTMLDivElement>(null);

    // 点击 "View My Work" 平滑滚动到 About 区域(第二屏)
    const scrollToAbout = () => {
        scrollRef.current?.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
    };

    // 处理菜单锚点跳转(#home / #about / #projects / #contact)
    const handleAnchorNavigation = (e: ReactMouseEvent<HTMLDivElement>) => {
        const target = e.target as HTMLElement;
        const anchor = target.closest('a[href^="#"]');
        if (!anchor || !scrollRef.current) return;
        const id = anchor.getAttribute('href')?.slice(1);
        if (!id) return;
        const el = document.getElementById(id);
        if (!el) return;
        e.preventDefault();
        const top = el.offsetTop;
        scrollRef.current.scrollTo({ top, behavior: 'smooth' });
    };

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
                <section id="more" className="page" style={{ backgroundColor: '#000000' }}>
                    <More />
                </section>
                <section id="contact" className="page" style={{ backgroundColor: '#000000' }}>
                    <Contact />
                </section>
            </div>
            {/* 全局悬浮菜单 */}
            <Menu />
        </div>
    );
}