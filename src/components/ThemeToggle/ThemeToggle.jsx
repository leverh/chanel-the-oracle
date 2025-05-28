import './ThemeToggle.css';

function ThemeToggle({ darkMode, setDarkMode }) {
  return (
    <button 
      className="theme-toggle"
      onClick={() => setDarkMode(!darkMode)}
      aria-label="Toggle theme"
    >
      {darkMode ? '☀️' : '🌙'}
    </button>
  );
}

export default ThemeToggle;