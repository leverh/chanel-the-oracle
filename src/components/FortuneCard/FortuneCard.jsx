import { useState, useEffect } from 'react';
import './FortuneCard.css';
import chanelImage from '../../assets/chanel-oracle.png';

function FortuneCard({ fortune, isRevealing, onNewQuestion }) {
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    if (fortune && !isRevealing) {
      setIsTyping(true);
      setDisplayedText('');
      
      let currentIndex = 0;
      const typingSpeed = 30; // milliseconds per character
      
      const typeWriter = () => {
        if (currentIndex < fortune.length) {
          setDisplayedText(fortune.substring(0, currentIndex + 1));
          currentIndex++;
          setTimeout(typeWriter, typingSpeed);
        } else {
          setIsTyping(false);
        }
      };
      
      // Small delay before starting to type
      setTimeout(typeWriter, 300);
    }
  }, [fortune, isRevealing]);

  return (
    <div className="fortune-card">
      <div className="cat-section">
        <div className="cat-avatar">
          <div className="cat-image-container">
            <img
              src={chanelImage}
              alt="Chanel the Oracle Cat"
              className="chanel-photo"
            />
            <span className="cat-name">Chanel</span>
          </div>
        </div>
       
        {isRevealing && (
          <div className="thinking-indicator">
            <div className="thinking-dots">
              <span></span>
              <span></span>
              <span></span>
            </div>
            <p>Chanel is consulting the ancient feline prophecies...</p>
          </div>
        )}
      </div>
     
      <div className="fortune-section">
        {fortune && !isRevealing && (
          <div className="fortune-reveal">
            <div className="fortune-text">
              <p className={isTyping ? 'typing' : ''}>
                "{displayedText}"
                {isTyping && <span className="typing-cursor">|</span>}
              </p>
            </div>
            {!isTyping && (
              <button className="new-question-btn" onClick={onNewQuestion}>
                Ask Another Question
              </button>
            )}
          </div>
        )}
       
        {!fortune && !isRevealing && (
          <div className="welcome-message">
            <p>Welcome, seeker of wisdom! Ask Chanel your most pressing question, and she will consult the cosmic forces... and her treat jar.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default FortuneCard;