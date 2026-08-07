import vrDesign3 from '@/assets/portfolioPic/vrDesign/A4 - 23.png';
import vrDesign1 from '@/assets/portfolioPic/vrDesign/A4 - 24.png';
import vrDesign2 from '@/assets/portfolioPic/vrDesign/A4 - 25.png';
import './VrDesign.css';

const vrDesignImages = [vrDesign1, vrDesign2, vrDesign3];

export default function VrDesign() {
    const handleBack = () => {
        window.location.hash = '#projects';
        // 等待 hash 变化后 scrollRef 会滚动到对应页面
    };

    return (
        <div className="vr-design-page">
            <div className="vr-design-header">
                <button className="vr-design-back" onClick={handleBack}>
                    ← Back
                </button>
                <h1 className="vr-design-title">VR DESIGN</h1>
                <span className="vr-design-spacer" />
            </div>

            <div className="vr-design-images">
                {vrDesignImages.map((img, idx) => (
                    <div className="vr-design-image-wrapper" key={idx}>
                        <img src={img} alt={`VR Design ${idx + 1}`} className="vr-design-image" />
                    </div>
                ))}
            </div>

            <footer className="vr-design-footer">
                <button className="vr-design-back-bottom" onClick={handleBack}>
                    ← Back to Projects
                </button>
            </footer>
        </div>
    );
}