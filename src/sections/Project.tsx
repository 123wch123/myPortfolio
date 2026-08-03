import FlowingMenu from '@/reactbitComponent/FlowingMenu/FlowingMenu';
import LightRays from '@/reactbitComponent/LightRays';
import './Project.css';

const demoItems = [
    { link: '#', text: 'Ambient', image: 'https://picsum.photos/600/400?random=1' },
    { link: '#', text: 'House', image: 'https://picsum.photos/600/400?random=2' },
    { link: '#', text: 'Techno', image: 'https://picsum.photos/600/400?random=3' },
    { link: '#', text: 'Jazz', image: 'https://picsum.photos/600/400?random=4' }
];

export default function Project() {
    return (
        <div className="project-safe-area">
            <div className="page-label">Projects</div>
            {/* 背景层 - fixed 定位,始终铺满视口 */}
            <div className="project-bg">
                <LightRays
                    raysOrigin="top-center"
                    raysColor="#B497CF"
                    raysSpeed={1}
                    lightSpread={0.5}
                    rayLength={3}
                    followMouse={true}
                    mouseInfluence={0.1}
                    noiseAmount={0}
                    distortion={0}
                    className="custom-rays"
                    pulsating={false}
                    fadeDistance={1}
                    saturation={1}
                />
            </div>

            {/* 前景内容层 */}
            <div className="project-content">
                <div style={{ height: '600px', width: '100%', position: 'relative' }}>
                    <FlowingMenu items={demoItems} />
                </div>
            </div>
        </div>
    );
}