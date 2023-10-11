import { useEffect, useState } from 'react';

import './App.css'

const App = () => {

    const [quoteInfo, setQuoteInfo] = useState({});

    useEffect(() => {
        getQuote();
    }, [])

    const getQuote = () => {
        fetch('https://api.quotable.io/random')
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setQuoteInfo({
                    text: data.content,
                    author: data.author
                })
                console.log(data)
            });
    }

    return (
        <div className='app'>
            <div id='quote-box'>
                <h1 id='text'>{quoteInfo.text}</h1>
                <h2 id='author'>-{quoteInfo.author}</h2>
                <button id='new-quote' onClick={getQuote}>New Quote</button>
                <a id='tweet-quote' href={"https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=" + quoteInfo.text}target='_blank'>Tweet</a>
            </div>
        </div>
    )
}

export default App;