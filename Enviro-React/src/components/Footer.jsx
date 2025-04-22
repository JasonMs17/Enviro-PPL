import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* <div className="footer-top">
          <div className="footer-logo">
            <h2>Enviro</h2>
            <p>Merawat Bumi, Menjaga Kehidupan</p>
          </div>
          <div className="footer-social">
            <a href="#" aria-label="Facebook">
              <FaFacebook />
            </a>
            <a href="#" aria-label="Twitter">
              <FaTwitter />
            </a>
            <a href="#" aria-label="Instagram">
              <FaInstagram />
            </a>
            <a href="#" aria-label="LinkedIn">
              <FaLinkedin />
            </a>
          </div>
        </div> */}

        <div className="footer-links">
          <div className="footer-column">
            <h3>Navigasi</h3>
            <ul>
              <li>
                <Link to="/">Beranda</Link>
              </li>
              <li>
                <Link to="/tentang">Tentang Kami</Link>
              </li>
              <li>
                <Link to="/materi">Materi</Link>
              </li>
              <li>
                <Link to="/challenge">Challenge</Link>
              </li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Materi</h3>
            <ul>
              <li>
                <Link to="/pencemaran-tanah">Pencemaran Tanah</Link>
              </li>
              <li>
                <Link to="/pencemaran-air">Pencemaran Air</Link>
              </li>
              <li>
                <Link to="/pencemaran-udara">Pencemaran Udara</Link>
              </li>
              <li>
                <Link to="/konservasi">Konservasi</Link>
              </li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Kontak</h3>
            <ul>
              <li>Email: info@enviro.id</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Enviro. All rights reserved.</p>
          {/* <div className="footer-legal">
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms of Service</Link>
          </div> */}
        </div>
      </div>
    </footer>
  );
}
