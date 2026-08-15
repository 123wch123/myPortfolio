import productImg from '@/assets/images/product.png';
import uiuxImg from '@/assets/images/UIUX.png';
import vrImg from '@/assets/images/VR.png';
import FlowingMenu from '@/reactbitComponent/FlowingMenu/FlowingMenu';
import LightRays from '@/reactbitComponent/LightRays';
import './Project.css';

export default function Project() {
    const demoItems = [
        {
            link: '#',
            text: 'PRODUCT DESIGN',
            image: productImg,
            onClick: () => {
                window.location.hash = '#product-design';
            }
        },
        { link: '#', text: 'UI/UX DESIGN', image: uiuxImg },
        {
            link: '#',
            text: 'VR DESIGN',
            image: vrImg,
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