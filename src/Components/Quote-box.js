import React, {Component} from 'react';
import Button from './UI/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';

class QuoteBox extends Component {

	constructor () {
		super();
		this.state = {
			quotes: [],
            quote: "Connecting...",
            author: "Please wait."
		};
        this.newQuoteHandler = this.newQuoteHandler.bind(this);
        this.copyQuote = this.copyQuote.bind(this);
        this.whatsappQuote = this.whatsappQuote.bind(this);
        this.twitterQuote = this.twitterQuote.bind(this);
        this.tumblrQuote = this.tumblrQuote.bind(this);
	}
    
    newQuoteHandler(event) {
        var positionRandom = Math.floor(Math.random()*this.state.quotes.length);

        this.setState({
        author: this.state.quotes[positionRandom].author,
        quote: this.state.quotes[positionRandom].quote
      });
      
    }

    copyQuote() {
        var dummy = document.createElement("textarea");
        document.body.appendChild(dummy);
        dummy.style.opacity = 0;
        dummy.style.height = 0;
        dummy.value = '"' + this.state.quote + '" ' + this.state.author;
        dummy.select();
        document.execCommand("copy");
        alert("Copied the quote: " + dummy.value);
        document.body.removeChild(dummy);
    }
    whatsappQuote() {
        window.open('https://api.whatsapp.com/send?text=' +
        encodeURIComponent('"' + this.state.quote + '" ' + this.state.author), '_blank')
    }
    twitterQuote() {
        window.open('https://twitter.com/intent/tweet?hashtags=quotes&related=ecology&text=' +
        encodeURIComponent('"' + this.state.quote + '" ' + this.state.author), '_blank')
    }
    tumblrQuote() {
        window.open('https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,ecology&caption=' +
        encodeURIComponent(this.state.author) +
        '&content=' +
        encodeURIComponent(this.state.quote) +
        '&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button', '_blank')
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
                <Button id="copy-quote" title="Copy to clipboard!" icon="fa copy" onClick={this.copyQuote.bind(this)}/>
                <Button id="whatsapp-quote" title="Whatsapp this quote!" target="_top" icon="fab whatsapp" onClick={this.whatsappQuote.bind(this)}/>
                <Button id="tweet-quote" title="Tweet this quote!" target="_top" icon="fab twitter" onClick={this.twitterQuote.bind(this)}/>
                <Button id="tumblr-quote" title="Post this quote on tumblr!" target="_blank" icon="fab tumblr" onClick={this.tumblrQuote.bind(this)}/>

                <Button id="new-quote" title="Get random quote" icon="fa redo" onClick={this.newQuoteHandler.bind(this)}>New Quote</Button>
            </div>
        </div>
        );
    }
}

export default QuoteBox;