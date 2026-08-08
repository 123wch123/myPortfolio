import vrDesign1 from '@/assets/portfolioPic/vrDesign/A4 - 23.png';
import FlowingMenu from '@/reactbitComponent/FlowingMenu/FlowingMenu';
import LightRays from '@/reactbitComponent/LightRays';
import './Project.css';

export default function Project() {
    const demoItems = [
        {
            link: '#',
            text: 'PRODUCT DESIGN',
            image: 'https://picsum.photos/600/400?random=1',
            onClick: () => {
                window.location.hash = '#product-design';
            }
        },
        { link: '#', text: 'UI/UX DESIGN', image: 'https://picsum.photos/600/400?random=2' },
        {
            link: '#',
            text: 'VR DESIGN',
            image: vrDesign1,
            onClick: () => {
                window.location.hash = '#vr-design';
            }
        }
    ];

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