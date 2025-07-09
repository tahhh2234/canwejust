import { FaTiktok, FaYoutube } from 'react-icons/fa'
import '../scss/App.scss'
import { SiInstagram } from 'react-icons/si'

function Footer() {
    return (
        <footer className="footer-container">
            <div className="footer-content">
                <p className="footer-text">© 2025 canwejust — All rights reserved.</p>
                <div className="footer-social">
                    <a href="https://youtube.com/@canwejustofficial" target="_blank" className="footer-link"><FaYoutube /></a>
                    <a href="https://tiktok.com/@canwejust__" target="_blank" className="footer-link"><FaTiktok /></a>
                    <a href="https://instagram.com/canwejust__" target="_blank" className="footer-link"><SiInstagram /></a>
                </div>
            </div>
        </footer>
    )
}

export default Footer
