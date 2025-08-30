import './Logo.css';

const Logo = ({ size = 'large', showSubtitle = true, variant = 'default' }) => {
  return (
    <div className={`logo-container ${size} ${variant}`}>
      {/* Logo Icon */}
      <div className="logo-icon">
        <span className="logo-symbol">⚔️</span>
        <span className="logo-accent">🥋</span>
      </div>
      
      {/* Logo Text */}
      <div className="logo-text">
        <h1 className="logo-title">DOJO MASTER</h1>
        <div className="logo-divider"></div>
        {showSubtitle && (
          <p className="logo-subtitle">Academia de Artes Marciales</p>
        )}
      </div>
    </div>
  );
};

export default Logo;