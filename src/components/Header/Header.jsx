import StarOrnament from '../StarOrnament/StarOrnament';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <h1 className="title">
            <StarOrnament size={22} animate /> Chanel's Mystical Predictions <StarOrnament size={22} animate />
        </h1>
        <p className="subtitle">Your loving and popular oracle cat is ready to reveal your destiny</p>
      </div>
    </header>
  );
}

export default Header;