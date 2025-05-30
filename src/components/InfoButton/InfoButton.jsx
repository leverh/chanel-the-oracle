import { useState } from 'react';
import './InfoButton.css';
import WelcomeModal from '../WelcomeModal/WelcomeModal';

function InfoButton() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button 
        className="info-button"
        onClick={() => setShowModal(true)}
        title="About Chanel & Cosmic Consultation Terms"
      >
        ?
      </button>
      
      {showModal && (
        <div className="modal-overlay" onClick={(e) => {
          if (e.target === e.currentTarget) setShowModal(false);
        }}>
          <div className="welcome-modal">
            <button className="modal-close" onClick={() => setShowModal(false)}>×</button>
            
            <div className="modal-header">
              <div className="modal-cat-image">
                <img src="/src/assets/chanel-oracle.png" alt="Chanel the Oracle" />
              </div>
              <h2 className="modal-title">
                <span className="modal-symbol">✨</span>
                About Chanel & Cosmic Terms
                <span className="modal-symbol">✨</span>
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
                  <span className="mystical-icon">※</span>
                  Cosmic Consultation Terms
                  <span className="mystical-icon">※</span>
                </h3>
                <div className="disclaimer-text">
                  <p>
                    *Please note: Cosmic catnip interference may occasionally cause prophetic signals to cross wires. 
                    If your fortune seems peculiar, try rephrasing your question - Chanel is merely a conduit for the universe's mysterious ways and cannot be held responsible for the cosmos' sense of humor.*
                  </p>
                  <p className="additional-disclaimer">
                    *Results may vary based on treat availability, nap schedule, and the alignment of the mystical litter box. 
                    Chanel reserves the right to pause consultations for urgent yarn ball investigations.*
                  </p>
                </div>
              </div>
            </div>

            <div className="modal-footer">
              <button className="begin-consultation-btn" onClick={() => setShowModal(false)}>
                Continue Consultation
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default InfoButton;