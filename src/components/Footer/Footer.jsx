import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-links">
          <div className="instagram-link">
            <span className="sparkle">✨</span>
            <span className="footer-text">Follow Chanel's</span>
            <a 
              href="https://www.instagram.com/chanel.kartel/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-link"
            >
              @chanel.kartel
            </a>
            <span className="sparkle">✨</span>
          </div>
          
          <div className="divider">•</div>
          
          <div className="creator-link">
            <span className="footer-text">Created with cosmic love by</span>
            <a 
              href="https://pixelsummit.dev/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="website-link"
            >
              PixelSummit
            </a>
          </div>
        </div>
        
        <div className="footer-tagline">
          <span className="mystical-symbol">※</span>
          <span>May the cosmic forces guide your path</span>
          <span className="mystical-symbol">※</span>
        </div>
        <div className="footer-copyright">
          © 2025 Chanel's Mystical Predictions. All cosmic rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;