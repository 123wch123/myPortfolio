import wechatImg from '@/assets/images/WeChat.png';
import whatsappImg from '@/assets/images/WhatsApp.png';
import './Contact.css';

export default function Contact() {
    return (
        <>
            <div className="page-label">Contact</div>
            <div className="contact-container">
                {/* 左侧上方：联系方式（占位信息） */}
                <div className="contact-info">
                    <h2 className="contact-title">Get In Touch</h2>
                    <div className="contact-item">
                        <span className="contact-label">EMAIL</span>
                        <span className="contact-value">wangchuhong123@gmail.com</span>
                    </div>
                    <div className="contact-item">
                        <span className="contact-label">PHONE</span>
                        <span className="contact-value">+86 18301001399</span>
                    </div>
                </div>

                {/* 右侧：二维码（每个上方标注账号占位） */}
                <div className="contact-qr-section">
                    <div className="contact-qr-card">
                        <span className="contact-qr-account">WeChat: 18301001399</span>
                        <img src={wechatImg} alt="WeChat QR Code" className="contact-qr-image" />
                    </div>
                    <div className="contact-qr-card">
                        <span className="contact-qr-account">WhatsApp: +86 18301001399</span>
                        <img src={whatsappImg} alt="WhatsApp QR Code" className="contact-qr-image" />
                    </div>
                </div>
            </div>
        </>
    );
}
