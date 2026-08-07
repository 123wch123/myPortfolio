import morePic9 from '@/assets/morePic/17427e9e210cd7e0c5c683a4e9e722d8.jpg';
import morePic1 from '@/assets/morePic/3f0c3e4f7adc7fb2a76d6c21a2bdafb8.jpg';
import morePic5 from '@/assets/morePic/670898d47025df565498dd08ee4fdea7.jpg';
import morePic3 from '@/assets/morePic/819c49e58c91d082ca297b2475dd159d.jpg';
import morePic6 from '@/assets/morePic/a45b046de4f55b9331e10a5cdcda39a2.jpg';
import morePic8 from '@/assets/morePic/acc03ec49df1e359cc5529f493c51c93.jpg';
import morePic7 from '@/assets/morePic/aea6eff73e467a0050cda28e70d0e0ee.jpg';
import morePic4 from '@/assets/morePic/c01383ee57cd3727127c649a91d586de.jpg';
import morePic2 from '@/assets/morePic/e52d0ab679bc4e40652f5fd6bdfb0b33.jpg';
import DriftWall from '@/reactbitComponent/DriftWall/DriftWall';
import './More.css';

const driftItems = [
    { image: morePic1, title: 'Design 1' },
    { image: morePic2, title: 'Design 2' },
    { image: morePic3, title: 'Design 3' },
    { image: morePic4, title: 'Design 4' },
    { image: morePic5, title: 'Design 5' },
    { image: morePic6, title: 'Design 6' },
    { image: morePic7, title: 'Design 7' },
    { image: morePic8, title: 'Design 8' },
    { image: morePic9, title: 'Design 9' },
];

export default function More() {
    return (
        <div className="more-container">
            <div className="page-label">More</div>
            <div className="more-layout">
                <div className="more-interests">
                    <h2 className="more-interests-title">Interests</h2>
                    <ul className="more-interests-list">
                        <li>Saxophone</li>
                        <li>Badminton</li>
                        <li>Skiing & Ice Skating</li>
                        <li>Motorcycle</li>
                        <li>Photography</li>
                    </ul>
                    <p className="more-interests-note">
                        If you want to know more about me, feel free to reach out via the contact page. I am always open to discussing design, technology, and creative ideas!
                    </p>
                </div>
                <div className="more-drift-wall">
                    <DriftWall
                        items={driftItems}
                        columns={5}
                        tileWidth={200}
                        tileHeight={132}
                        gap={18}
                        tilt={16}
                        turn={-14}
                        perspective={1200}
                        depth={120}
                        speed={42}
                        direction="up"
                        variance={0.45}
                        parallax={0.6}
                        lift={64}
                        fade={0.6}
                        dim={0.55}
                        overlayColor="#060010"
                    />
                </div>
            </div>
        </div>
    );
}
