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
                <Button id="copy-quote" title="Copy to clipboard!" icon="fa copy"/>
                <Button id="whatsapp-quote" title="Whatsapp this quote!" target="_top" icon="fab whatsapp"/>
                <Button id="tweet-quote" title="Tweet this quote!" target="_top" icon="fab twitter"/>
                <Button id="tumblr-quote" title="Post this quote on tumblr!" target="_blank" icon="fab tumblr"/>

                <Button id="new-quote" title="Get random quote" icon="fa redo" onClick={this.newQuoteHandler.bind(this)}>New Quote</Button>
            </div>
        </div>
        );
    }
}

export default QuoteBox;