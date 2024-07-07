import { FooterContainer } from "../../assets/styledComponents/homeStyles/footerStyle";

export const Footer: React.FC = () => {
    return (
        <FooterContainer>
            <div className="footer-container">
                <div className="footer-links">
                    <h1>Quick Links</h1>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Services</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </div>
                <div className="footer-links">
                    <h1>Company</h1>
                    <ul>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Our Team</a></li>
                        <li><a href="#">Careers</a></li>
                        <li><a href="#">Partners</a></li>
                    </ul>
                </div>
                <div className="footer-links">
                    <h1>Resources</h1>
                    <ul>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">FAQs</a></li>
                        <li><a href="#">Help Center</a></li>
                    </ul>
                </div>
                <div className="footer-links">
                    <h1>Legal</h1>
                    <ul>
                        <li><a href="#">Terms & Conditions</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                    </ul>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2021 InfluencerHUB. All rights reserved.</p>
            </div>
        </FooterContainer>
    );
}