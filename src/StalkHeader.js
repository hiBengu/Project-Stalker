import './StalkHeader.css';
import logo from './logo.svg';

function StalkHeader() {
  return (
    <div className="stalk-header">
        <div className="header-sec header-name">
            <p>Project Stalker</p>
        </div>
        <div className="header-sec">
            <img src={logo} className="stalk-logo" alt="logo" />
        </div>
        <div className="header-sec header-links">
            <a href='/' className="link-text">_*_</a>
            <a href='/' className="link-text">_*_</a>
            <a href='/' className="link-text">_*_</a>
        </div>
    </div>
    
  );
}

export default StalkHeader;
