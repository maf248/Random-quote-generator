import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft, faCopy } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp, faTwitter, faTumblr } from '@fortawesome/free-brands-svg-icons';

function App() {
  return (
    <div id="wrapper" className="App">
      
      <main className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div id="quote-box">
        <div className="quote-text"><FontAwesomeIcon icon={faQuoteLeft} /><span id="text"></span></div>
        <div className="quote-author">- <span id="author"></span></div>
        <div className="buttons">
            <button className="btn btn-secondary button" id="copy-quote" title="Copy to clipboard!">
            <FontAwesomeIcon icon={faCopy} />
            </button>
            <button className="btn btn-secondary button" id="whatsapp-quote" title="Whatsapp this quote!" target="_top">
            <FontAwesomeIcon icon={faWhatsapp} />
            </button>
            <button className="btn btn-secondary button" id="tweet-quote" title="Tweet this quote!" target="_top">
            <FontAwesomeIcon icon={faTwitter} />
            </button>
            <button className="button" id="tumblr-quote" title="Post this quote on tumblr!" target="_blank">
            <FontAwesomeIcon icon={faTumblr} />
            </button>
            <button className="button btn btn-secondary" id="new-quote">New quote</button>
        </div>
    </div>
      </main>
    
    <div className="footer">by <a href="https://codepen.io/maf248/">MaF!</a></div>
    </div>

  );
}

export default App;