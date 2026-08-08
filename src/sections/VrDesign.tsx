import vrDesign3 from '@/assets/portfolioPic/vrDesign/A4 - 23.png';
import vrDesign1 from '@/assets/portfolioPic/vrDesign/A4 - 24.png';
import vrDesign2 from '@/assets/portfolioPic/vrDesign/A4 - 25.png';
import { FiChevronLeft } from 'react-icons/fi';
import './VrDesign.css';

const vrDesignImages = [vrDesign1, vrDesign2, vrDesign3];

export default function VrDesign() {
    const handleBack = () => {
        window.location.hash = '#projects';
        // 等待 hash 变化后 scrollRef 会滚动到对应页面
    };

    return (
        <div className="vr-design-page">
            <button className="vr-design-back-circle" onClick={handleBack} aria-label="Back to Projects">
                <FiChevronLeft />
            </button>

            <div className="vr-design-content">
                <div className="vr-design-info">
                    <h2 className="vr-design-title">VR DESIGN</h2>
                    <p className="vr-design-desc">
                        A Bat Perspective VR game ——Explore the Non-Human Sensory World
                    </p>
                </div>
                <div className="vr-design-video-wrapper">
                    <iframe
                        className="vr-design-video"
                        src="https://www.youtube.com/embed/HM4P0kYOmuc?start=422"
                        title="Batopia: Project Creation Story, 2024"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                        referrerPolicy="strict-origin-when-cross-origin"
                    />
                </div>

                <div className="vr-design-images">
                    {vrDesignImages.map((img, idx) => (
                        <div className="vr-design-image-wrapper" key={idx}>
                            <img src={img} alt={`VR Design ${idx + 1}`} className="vr-design-image" />
                        </div>
                    ))}
                </div>
            </div>

            <footer className="vr-design-footer">
                <button className="vr-design-back-bottom" onClick={handleBack}>
                    ← Back to Projects
                </button>
            </footer>
        </div>
    );
}