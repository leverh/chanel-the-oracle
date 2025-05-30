import './FortuneCard.css';
import chanelImage from '../../assets/chanel-oracle1.png';

function FortuneCard({ fortune, isRevealing, onNewQuestion }) {
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
              <p>"{fortune}"</p>
              <p className="cosmic-disclaimer">
                *Cosmic catnip interference may cause mixed signals. If fortune seems odd, try rephrasing your question - Chanel is not responsible for the universe's quirky sense of humor.*
              </p>
            </div>
            <button className="new-question-btn" onClick={onNewQuestion}>
              Ask Another Question
            </button>
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