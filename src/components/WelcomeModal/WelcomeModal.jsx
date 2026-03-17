import { useState, useEffect } from 'react';
import StarOrnament from '../StarOrnament/StarOrnament';
import './WelcomeModal.css';
import chanelImage from '../../assets/chanel-oracle.png';

function WelcomeModal() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const hasSeenWelcome = sessionStorage.getItem('chanelWelcomeSeen');
    if (!hasSeenWelcome) {
      setIsVisible(true);
    }
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    sessionStorage.setItem('chanelWelcomeSeen', 'true');
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  if (!isVisible) return null;

  return (
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div className="welcome-modal">
        <button className="modal-close" onClick={handleClose}>×</button>
        
        <div className="modal-header">
          <div className="modal-cat-image">
            <img src={chanelImage} alt="Chanel the Oracle" />
          </div>
          <h2 className="modal-title">
            <StarOrnament size={22} animate />
            Welcome, Seeker of Wisdom
            <StarOrnament size={22} animate />
          </h2>
        </div>

        <div className="modal-content">
          <div className="welcome-text">
            <p>
              Greetings! I am <strong>Chanel</strong>, your mystical oracle cat, ready to unveil the cosmic mysteries that surround your destiny. Through ancient feline wisdom and celestial consultation, I shall provide guidance from the ethereal realms.
            </p>
            
            <p>
              Simply ask your question, and I will consult the cosmic forces... and perhaps my treat jar for additional inspiration.
            </p>
          </div>

          <div className="disclaimer-section">
            <h3 className="disclaimer-title">
              <StarOrnament size={12} className="mystical-icon"></StarOrnament>
              Cosmic Consultation Terms
              <StarOrnament size={12} className="mystical-icon"></StarOrnament>
            </h3>
            <div className="disclaimer-text">
              <p>
                *Please note: Cosmic catnip interference may occasionally cause prophetic signals to cross wires. 
                If your fortune seems peculiar, try rephrasing your question - Chanel is merely a conduit for the universe's mysterious ways and cannot be held responsible for the cosmos' sense of humor.*
              </p>
              <p className="additional-disclaimer">
                *Results may vary based on treat availability, nap schedule, and the alignment of the mystical litter box. 
                Chanel reserves the right to pause consultations for urgent nap/meal/cuddle investigations. <br />
                Terms and conditions apply*
              </p>
            </div>
          </div>
        </div>

        <div className="modal-footer">
          <button className="begin-consultation-btn" onClick={handleClose}>
            Begin My Cosmic Consultation
          </button>
        </div>
      </div>
    </div>
  );
}

export default WelcomeModal;