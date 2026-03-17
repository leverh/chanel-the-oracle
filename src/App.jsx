import { useState, useEffect } from 'react';
import './App.css';
import WelcomeModal from './components/WelcomeModal/WelcomeModal';
import InfoButton from './components/InfoButton/InfoButton';
import Header from './components/Header/Header';
import FortuneCard from './components/FortuneCard/FortuneCard';
import QuestionInput from './components/QuestionInput/QuestionInput';
import ThemeToggle from './components/ThemeToggle/ThemeToggle';
import Footer from './components/Footer/Footer';
import { getChanelFortune } from './data/catOracle';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [currentFortune, setCurrentFortune] = useState('');
  const [question, setQuestion] = useState('');
  const [isRevealing, setIsRevealing] = useState(false);

  useEffect(() => {
    document.body.className = darkMode ? 'dark-mode' : 'light-mode';
  }, [darkMode]);

  const handleGetFortune = async () => {
  if (!question.trim()) return;

  const currentQuestion = question;
  setIsRevealing(true);
  setQuestion('');

  const fortune = await getChanelFortune(currentQuestion);
  setCurrentFortune(fortune);
  setIsRevealing(false);
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