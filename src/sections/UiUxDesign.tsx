// UI/UX Design 独立页面 —— 展示方法参考 Product Design(AccordionGallery 画廊 + 垂直详情视图)
import AccordionGallery from '@/reactbitComponent/AccordionGallery/AccordionGallery';
import { useState } from 'react';
import { FiChevronLeft } from 'react-icons/fi';
import './ProductDesign.css';

// skillUI
import skillUISlide1 from '@/assets/portfolioPic/UIUXdesign/skillUI/Slide 16_9 - 33.png';
import skillUISlide2 from '@/assets/portfolioPic/UIUXdesign/skillUI/Slide 16_9 - 34.png';
import skillUISlide3 from '@/assets/portfolioPic/UIUXdesign/skillUI/Slide 16_9 - 35.png';
import skillUISlide4 from '@/assets/portfolioPic/UIUXdesign/skillUI/Slide 16_9 - 36.png';
import skillUISlide5 from '@/assets/portfolioPic/UIUXdesign/skillUI/Slide 16_9 - 37.png';
import skillUISlide6 from '@/assets/portfolioPic/UIUXdesign/skillUI/Slide 16_9 - 38.png';
import skillUISlide7 from '@/assets/portfolioPic/UIUXdesign/skillUI/Slide 16_9 - 39.png';
import skillUISlide8 from '@/assets/portfolioPic/UIUXdesign/skillUI/Slide 16_9 - 40.png';
import skillUISlide9 from '@/assets/portfolioPic/UIUXdesign/skillUI/Slide 16_9 - 41.png';
import skillUISlide10 from '@/assets/portfolioPic/UIUXdesign/skillUI/Slide 16_9 - 42.png';
import skillUISlide11 from '@/assets/portfolioPic/UIUXdesign/skillUI/Slide 16_9 - 43.png';
import skillUISlide12 from '@/assets/portfolioPic/UIUXdesign/skillUI/Slide 16_9 - 44.png';
import skillUISlide13 from '@/assets/portfolioPic/UIUXdesign/skillUI/Slide 16_9 - 45.png';
import skillUISlide14 from '@/assets/portfolioPic/UIUXdesign/skillUI/Slide 16_9 - 46.png';
import skillUISlide15 from '@/assets/portfolioPic/UIUXdesign/skillUI/Slide 16_9 - 47.png';

// colvita
import colvita1 from '@/assets/portfolioPic/UIUXdesign/colvita/A4 - 34.png';
import colvita2 from '@/assets/portfolioPic/UIUXdesign/colvita/A4 - 35.png';
import colvita3 from '@/assets/portfolioPic/UIUXdesign/colvita/A4 - 40.png';

// Still With Me
import stillWithMe1 from '@/assets/portfolioPic/UIUXdesign/StillWithMe/Frame-1.png';
import stillWithMe2 from '@/assets/portfolioPic/UIUXdesign/StillWithMe/Frame-2.png';
import stillWithMe3 from '@/assets/portfolioPic/UIUXdesign/StillWithMe/Frame-3.png';
import stillWithMe4 from '@/assets/portfolioPic/UIUXdesign/StillWithMe/Frame-4.png';
import stillWithMe5 from '@/assets/portfolioPic/UIUXdesign/StillWithMe/Frame-5.png';
import stillWithMe6 from '@/assets/portfolioPic/UIUXdesign/StillWithMe/Frame-6.png';
import stillWithMe7 from '@/assets/portfolioPic/UIUXdesign/StillWithMe/Frame-7.png';
import stillWithMeFrame from '@/assets/portfolioPic/UIUXdesign/StillWithMe/Frame.png';

// iRelish
import iRelish3 from '@/assets/portfolioPic/UIUXdesign/iRelish/Slide 16_9 - 10.png';
import iRelish4 from '@/assets/portfolioPic/UIUXdesign/iRelish/Slide 16_9 - 12.png';
import iRelish5 from '@/assets/portfolioPic/UIUXdesign/iRelish/Slide 16_9 - 13.png';
import iRelish6 from '@/assets/portfolioPic/UIUXdesign/iRelish/Slide 16_9 - 14.png';
import iRelish7 from '@/assets/portfolioPic/UIUXdesign/iRelish/Slide 16_9 - 15.png';
import iRelish8 from '@/assets/portfolioPic/UIUXdesign/iRelish/Slide 16_9 - 16.png';
import iRelish9 from '@/assets/portfolioPic/UIUXdesign/iRelish/Slide 16_9 - 17.png';
import iRelish1 from '@/assets/portfolioPic/UIUXdesign/iRelish/Slide 16_9 - 8.png';
import iRelish2 from '@/assets/portfolioPic/UIUXdesign/iRelish/Slide 16_9 - 9.png';

// nio
import nio1 from '@/assets/portfolioPic/UIUXdesign/nio/Frame-1.png';
import nio10 from '@/assets/portfolioPic/UIUXdesign/nio/Frame-10.png';
import nio11 from '@/assets/portfolioPic/UIUXdesign/nio/Frame-11.png';
import nio12 from '@/assets/portfolioPic/UIUXdesign/nio/Frame-12.png';
import nio13 from '@/assets/portfolioPic/UIUXdesign/nio/Frame-13.png';
import nio14 from '@/assets/portfolioPic/UIUXdesign/nio/Frame-14.png';
import nio15 from '@/assets/portfolioPic/UIUXdesign/nio/Frame-15.png';
import nio16 from '@/assets/portfolioPic/UIUXdesign/nio/Frame-16.png';
import nio17 from '@/assets/portfolioPic/UIUXdesign/nio/Frame-17.png';
import nio18 from '@/assets/portfolioPic/UIUXdesign/nio/Frame-18.png';
import nio19 from '@/assets/portfolioPic/UIUXdesign/nio/Frame-19.png';
import nio2 from '@/assets/portfolioPic/UIUXdesign/nio/Frame-2.png';
import nio3 from '@/assets/portfolioPic/UIUXdesign/nio/Frame-3.png';
import nio4 from '@/assets/portfolioPic/UIUXdesign/nio/Frame-4.png';
import nio5 from '@/assets/portfolioPic/UIUXdesign/nio/Frame-5.png';
import nio6 from '@/assets/portfolioPic/UIUXdesign/nio/Frame-6.png';
import nio7 from '@/assets/portfolioPic/UIUXdesign/nio/Frame-7.png';
import nio8 from '@/assets/portfolioPic/UIUXdesign/nio/Frame-8.png';
import nio9 from '@/assets/portfolioPic/UIUXdesign/nio/Frame-9.png';
import nioFrame from '@/assets/portfolioPic/UIUXdesign/nio/Frame.png';

// 画廊封面
import colvitaCover from '@/assets/portfolioPic/UIUXdesign/GalleryPicture/colvita.png';
import iRelishCover from '@/assets/portfolioPic/UIUXdesign/GalleryPicture/iRelish.png';
import nioCover from '@/assets/portfolioPic/UIUXdesign/GalleryPicture/nio.png';
import skillUICover from '@/assets/portfolioPic/UIUXdesign/GalleryPicture/skillUI.png';
import stillWithMeCover from '@/assets/portfolioPic/UIUXdesign/GalleryPicture/stillWithMe.png';

interface UiUxProject {
    label: string;
    description: string;
    images: string[];
    /** 画廊封面图，缺省时使用 images[0] */
    cover?: string;
    /** 官网链接：想了解更多时可跳转体验 */
    link?: string;
}

// 项目顺序：skillUI → nio → colvita → Still With Me → iRelish
const projects: UiUxProject[] = [
    {
        label: 'SkillsUI',
        description:
            'SkillsUI is an AI-native platform enabling agents to execute tasks through dynamic interfaces and cross-system integration.',
        link: 'https://skillsui.rabbitpre.com.cn/?c=tzgw',
        images: [
            skillUISlide1,
            skillUISlide2,
            skillUISlide3,
            skillUISlide4,
            skillUISlide5,
            skillUISlide6,
            skillUISlide7,
            skillUISlide8,
            skillUISlide9,
            skillUISlide10,
            skillUISlide11,
            skillUISlide12,
            skillUISlide13,
            skillUISlide14,
            skillUISlide15,
        ],
        cover: skillUICover
    },
    {
        label: 'Nomi 5.0',
        description:
            'An intelligent in-vehicle digital experience concept for NIO, exploring connected cockpit interfaces, interaction flows and design language consistency across the driving journey.',
        images: [
            nioFrame,
            nio1,
            nio2,
            nio3,
            nio4,
            nio5,
            nio6,
            nio7,
            nio8,
            nio9,
            nio10,
            nio11,
            nio12,
            nio13,
            nio14,
            nio15,
            nio16,
            nio17,
            nio18,
            nio19,
        ],
        cover: nioCover
    },
    {
        label: 'colvita',
        description:
            'A mobile app UI/UX design focused on healthy living and wellness tracking, featuring a calm visual language and intuitive daily-activity flows.',
        images: [colvita1, colvita2, colvita3],
        cover: colvitaCover
    },
    {
        label: 'Still With Me',
        description:
            'An emotional design project that helps people preserve, revisit and share cherished memories of their loved ones.',
        images: [
            stillWithMeFrame,
            stillWithMe1,
            stillWithMe2,
            stillWithMe3,
            stillWithMe4,
            stillWithMe5,
            stillWithMe6,
            stillWithMe7,
        ],
        cover: stillWithMeCover
    },
    {
        label: 'iRelish',
        description:
            'A dining and food-discovery app UI concept that makes finding, saving and sharing great meals effortless.',
        images: [iRelish1, iRelish2, iRelish3, iRelish4, iRelish5, iRelish6, iRelish7, iRelish8, iRelish9],
        cover: iRelishCover
    }
];


export default function UiUxDesign() {
    const [selected, setSelected] = useState<number | null>(null);
    const selectedProject = selected !== null ? projects[selected] : null;

    return (
        <div className="product-design-page">
            {selectedProject ? (
                <>
                    <button
                        className="product-detail-back-circle"
                        onClick={() => setSelected(null)}
                        aria-label="Back to Gallery"
                    >
                        <FiChevronLeft />
                    </button>

                    <div className="product-detail-content">
                        <div className="product-detail-info">
                            <h2 className="product-detail-title">{selectedProject.label}</h2>
                            <p className="product-detail-desc">{selectedProject.description}</p>
                        </div>

                        {/* 参考 Product Design 的 PDF 式展示：垂直堆叠每一页设计稿 */}
                        <div className="product-detail-images">
                            {selectedProject.images.map((img, idx) => (
                                <div className="product-detail-image-wrapper" key={idx}>
                                    <img
                                        src={img}
                                        alt={`${selectedProject.label} ${idx + 1}`}
                                        className="product-detail-image"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    <footer className={`product-design-footer${selectedProject.link ? ' product-design-footer--split' : ''}`}>
                        <button className="product-detail-back" onClick={() => setSelected(null)}>
                            ← Back to Gallery
                        </button>
                        {selectedProject.link && (
                            <a
                                className="product-detail-link-button"
                                href={selectedProject.link}
                                target="_blank"
                                rel="noreferrer noopener"
                            >
                                Visit the Official Website
                            </a>
                        )}
                    </footer>
                </>
            ) : (
                <>
                    <button
                        className="product-detail-back-circle"
                        onClick={() => {
                            window.location.hash = '#projects';
                        }}
                        aria-label="Back to Projects"
                    >
                        <FiChevronLeft />
                    </button>

                    <div className="product-design-header">
                        <span className="product-design-spacer" />
                        <h1 className="product-design-title">UI/UX DESIGN</h1>
                        <span className="product-design-spacer" />
                    </div>

                    <div className="product-design-content">
                        <AccordionGallery
                            items={projects.map((p) => ({
                                image: p.cover ?? p.images[0],
                                label: p.label,
                                description: p.description
                            }))}
                            defaultIndex={0}
                            expandRatio={0.52}
                            trigger="hover"
                            accentColor="#71C4FF"
                            overlayColor="#060D1F"
                            textColor="#ffffff"
                            grayscale
                            showLabels
                            height={460}
                            gap={10}
                            radius={16}
                            duration={0.6}
                            ease="power3.out"
                            parallax={0.5}
                            tilt={8}
                            stagger={0.06}
                            onSelect={setSelected}
                        />
                    </div>
                </>
            )}
        </div>
    );
}

