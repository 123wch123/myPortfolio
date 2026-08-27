import productImg from '@/assets/images/product.png';
import uiuxImg from '@/assets/images/UIUX.png';
import vrImg from '@/assets/images/VR.png';
import FlowingMenu from '@/reactbitComponent/FlowingMenu/FlowingMenu';
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
        { link: '#', text: 'UI/UX DESIGN', image: uiuxImg,
            onClick: () => {
                window.location.hash = '#uiux-design';
            } },
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

            {/* 前景内容层 */}
            <div className="project-content">
                <div style={{ height: '600px', width: '100%', position: 'relative' }}>
                    <FlowingMenu items={demoItems} />
                </div>
            </div>
        </div>
    );
}