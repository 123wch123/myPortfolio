import awood1 from '@/assets/portfolioPic/productDesign/Awood/4-1.png';
import awood2 from '@/assets/portfolioPic/productDesign/Awood/4-2.png';
import echorc1 from '@/assets/portfolioPic/productDesign/Echorc/A4 - 26.png';
import echorc2 from '@/assets/portfolioPic/productDesign/Echorc/A4 - 27.png';
import frev1 from '@/assets/portfolioPic/productDesign/Frev/A4 - 20.png';
import frev2 from '@/assets/portfolioPic/productDesign/Frev/A4 - 21.png';
import frev3 from '@/assets/portfolioPic/productDesign/Frev/A4 - 39.png';
import awoodGallery from '@/assets/portfolioPic/productDesign/GalleryPicture/Awood图片.png';
import echorcGallery from '@/assets/portfolioPic/productDesign/GalleryPicture/echorc图片.png';
import frevGallery from '@/assets/portfolioPic/productDesign/GalleryPicture/frev图片.png';
import AccordionGallery from '@/reactbitComponent/AccordionGallery/AccordionGallery';
import { useState } from 'react';
import { FiChevronLeft } from 'react-icons/fi';
import './ProductDesign.css';

interface ProductProject {
    label: string;
    description: string;
    images: string[];
    /** 画廊封面图，缺省时使用 images[0] */
    cover?: string;
}

const projects: ProductProject[] = [
    {
        label: 'Frev',
        description:
            'A wearable device that could give infusion patients more freedom',
        images: [frev1, frev2, frev3],
        cover: frevGallery
    },
    {
        label: 'Echorc',
        description:
            'An accessible oracle bone script interactive display designed for visually impaired individuals',
        images: [echorc1, echorc2],
        cover: echorcGallery
    },
    {
        label: 'Awood',
        description:
            'A-Wood is a student project that helps children learn to organize and store their toys while playing.',
        images: [awood1, awood2],
        cover: awoodGallery
    }
];

export default function ProductDesign() {
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

                        {/* 参考 VR Design 的 PDF 式展示：垂直堆叠每一页设计稿 */}
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

                    <footer className="product-design-footer">
                        <button className="product-detail-back" onClick={() => setSelected(null)}>
                            ← Back to Gallery
                        </button>
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
                        <h1 className="product-design-title">PRODUCT DESIGN</h1>
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
