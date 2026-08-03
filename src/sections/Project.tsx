import LightRays from '@/reactbitComponent/LightRays';
import OptionWheel from '@/reactbitComponent/OptionWheel';
import './Project.css';

export default function Project() {
    return (
        <div className="project-safe-area">
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
                <OptionWheel
                    items={['Ambient', 'House', 'Techno', 'Jazz', 'Lo-Fi', 'Synthwave']}
                    defaultSelected={2}
                    textColor="#a6a6a6"
                    activeColor="#ffffff"
                    side="left"
                    fontSize={3}
                    spacing={1.4}
                    curve={1}
                    tilt={6}
                    blur={2}
                    fade={0.25}
                    smoothing={200}
                    inset={80}
                    loop={false}
                    draggable
                    soundUrl="/assets/sounds/click-soft.mp3"
                    soundVolume={0.5}
                    onChange={(index, item) => console.log(index, item)}
                />
            </div>
        </div>
    );
}