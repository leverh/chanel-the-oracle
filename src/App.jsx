import { useState, useEffect } from 'react';
import './App.css';
import WelcomeModal from './components/WelcomeModal/WelcomeModal';
import InfoButton from './components/InfoButton/InfoButton';
import Header from './components/Header/Header';
import FortuneCard from './components/FortuneCard/FortuneCard';
import QuestionInput from './components/QuestionInput/QuestionInput';
import ThemeToggle from './components/ThemeToggle/ThemeToggle';
import Footer from './components/Footer/Footer';
import { getContextualFortune } from './data/fortunes';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [currentFortune, setCurrentFortune] = useState('');
  const [question, setQuestion] = useState('');
  const [isRevealing, setIsRevealing] = useState(false);

  useEffect(() => {
    document.body.className = darkMode ? 'dark-mode' : 'light-mode';
  }, [darkMode]);

  const handleGetFortune = () => {
    if (!question.trim()) return;
    
    const currentQuestion = question;
    setIsRevealing(true);
    setQuestion('');
    
    // Simulate cat "thinking" 
    setTimeout(() => {
      const contextualFortune = getContextualFortune(currentQuestion);
      setCurrentFortune(contextualFortune);
      setIsRevealing(false);
    }, 2000);
  };

  const handleNewQuestion = () => {
    setCurrentFortune('');
    setQuestion('');
  };

  return (
  <div className="app">
    <div className="app-container">
      <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
      <WelcomeModal />
      <InfoButton />
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
    <Footer />
  </div>
);
}

export default App;