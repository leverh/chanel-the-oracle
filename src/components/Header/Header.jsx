import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <h1 className="title">
          <span className="title-symbols">※</span> Chanel's Mystical Predictions <span className="title-symbols">※</span>
        </h1>
        <p className="subtitle">Your loving and popular oracle cat is ready to reveal your destiny</p>
      </div>
    </header>
  );
}

export default Header;