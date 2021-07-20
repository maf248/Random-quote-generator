import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft, faCopy } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp, faTwitter, faTumblr } from '@fortawesome/free-brands-svg-icons';

class QuoteBox extends Component {

	constructor () {
		super();
		this.state = {
			quotes: [],
            quote: "Connecting...",
            author: "Please wait."
		};
        this.newQuoteHandler = this.newQuoteHandler.bind(this);
	}
    
    newQuoteHandler(event) {
        var positionRandom = Math.floor(Math.random()*this.state.quotes.length);

        this.setState({
        author: this.state.quotes[positionRandom].author,
        quote: this.state.quotes[positionRandom].quote
      });
      
      }

    componentDidMount () {

		fetch('https://api.jsonbin.io/b/60ec8df4c68da87103080bf6')
			.then(res => res.json())
			.then(response => {
                console.log(response);
                var positionRandom = Math.floor(Math.random()*response.quotes.length);
				this.setState({
					quotes: response.quotes,
                    author: response.quotes[positionRandom].author,
                    quote: response.quotes[positionRandom].quote

				})
			})
			.catch((e) => {
				console.log(e);
			})

	}

	// componentDidUpdate (prevProps, prevState) {
    //     if (prevState.quote !== this.state.quote) {
            
    //     }
	// }
    
    render() {
        return (
            <div id="quote-box">
            <div className="quote-text">
                <FontAwesomeIcon icon={faQuoteLeft} />
                <br/>
                <span id="text">{this.state.quote}</span>
            </div>
            <div className="quote-author">~ <span id="author">{this.state.author}</span></div>
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
                <button className="button btn btn-secondary" id="new-quote" onClick={this.newQuoteHandler.bind(this)}>New quote</button>
            </div>
        </div>
        );
    }
}

export default QuoteBox;