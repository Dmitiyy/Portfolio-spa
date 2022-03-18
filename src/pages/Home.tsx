import Ava from '../images/main_ava.png';
import InstIcon from '../images/inst.png';
import TelegramIcon from '../images/tel.png';
import GitIcon from '../images/git.png';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="content">
      <div className="main">
        <div className="main__wrap"> 
          <div className="main__text"> 
            <h1>Creating websites</h1>
            <p>I create websites for entrepreneurs, for small and large tasks. Implement your idea so quickly and without problems, let's get started!</p>
            <Link to="/projects">Start now</Link>
          </div>
          <div className="main__photo"><img src={Ava} alt="main_photo" /></div>
        </div>
        <div className="main__links"> 
          <div className="main__links-tube" />
          <a href="https://www.instagram.com/daptellum.dev/" target="_blank" rel="noreferrer">
            <div className="main__links-item"> 
              <img src={InstIcon} alt="instagram" />
            </div>
          </a>
          <a href="https://t.me/daptellum" target="_blank" rel="noreferrer">
            <div className="main__links-item">
              <img src={TelegramIcon} alt="telegram" />
            </div>
            </a>
          <a href="https://github.com/Dmitiyy" target="_blank" rel="noreferrer">
            <div className="main__links-item">
              <img src={GitIcon} alt="github"/>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
