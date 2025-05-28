import './QuestionInput.css';

function QuestionInput({ question, setQuestion, onGetFortune, disabled }) {
  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !disabled && question.trim()) {
      onGetFortune();
    }
  };

  return (
    <div className="question-input">
      <div className="input-group">
        <input
          type="text"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Ask Chanel your question..."
          disabled={disabled}
          className="question-field"
        />
        <button 
          onClick={onGetFortune}
          disabled={disabled || !question.trim()}
          className="consult-btn"
        >
          {disabled ? 'Consulting...' : 'Consult the Oracle'}
        </button>
      </div>
    </div>
  );
}

export default QuestionInput;