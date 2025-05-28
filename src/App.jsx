import { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import FortuneCard from './components/FortuneCard/FortuneCard';
import QuestionInput from './components/QuestionInput/QuestionInput';
import ThemeToggle from './components/ThemeToggle/ThemeToggle';
import { getContextualFortune } from './data/fortunes';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [currentFortune, setCurrentFortune] = useState('');
  const [question, setQuestion] = useState('');
  const [isRevealing, setIsRevealing] = useState(false);

  const handleGetFortune = () => {
    if (!question.trim()) return;
    
    setIsRevealing(true);
    
    // Simulate Cat "thinking" 
    setTimeout(() => {
      const contextualFortune = getContextualFortune(question);
      setCurrentFortune(contextualFortune);
      setIsRevealing(false);
    }, 2000);
  };

  const handleNewQuestion = () => {
    setCurrentFortune('');
    setQuestion('');
  };

  return (
    <div className={`app ${darkMode ? 'dark-mode' : 'light-mode'}`}>
      <div className="app-container">
        <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
        <Header />
        
        <main className="main-content">
          <FortuneCard 
            fortune={currentFortune}
            isRevealing={isRevealing}
            onNewQuestion={handleNewQuestion}
          />
          
          <QuestionInput 
            question={question}
            setQuestion={setQuestion}
            onGetFortune={handleGetFortune}
            disabled={isRevealing}
          />
        </main>
      </div>
    </div>
  );
}

export default App;