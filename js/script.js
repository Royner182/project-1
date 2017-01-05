quotes = [
    {
        quote: 'You can do anything, but not everything.',
        source: 'David Allen',
        citation: 'Wisdom Quotes',
        year: '2001'
    },
    {
        quote: 'Perfection is achieved, not when there is nothing more to add, but when there is nothing left to take away.',
        source: 'Antoine de Saint-Exupéry',
        citation: 'Wisdom Quotes',
        year: '1980'
    },
    {
        quote: 'The richest man is not he who has the most, but he who needs the least.',
        source: 'Unknown Author',
        citation: 'Wisdom Quotes',
        year: '1999'
    },
    {
        quote: 'You miss 100 percent of the shots you never take.',
        source: 'Wayne Gretzky',
        citation: '',
        year: '2005'
    },
    {
        quote: 'You must be the change you wish to see in the world.',
        source: 'Gandhi',
        citation: 'Wisdom Quotes',
        year: '2007'
    },
    {
        quote: 'When hungry, eat your rice; when tired, close your eyes. Fools may laugh at me, but wise men will know what I mean.',
        source: 'Lin-Chi',
        citation: '',
        year: '1930'
    },
    {
        quote: 'The third-rate mind is only happy when it is thinking with the majority. The second-rate mind is only happy when it is thinking with the minority. The first-rate mind is only happy when it is thinking.',
        source: 'A. A. Milne',
        citation: 'Wisdom Quotes',
        year: ''
    },
    {
        quote: 'We are what we repeatedly do; excellence, then, is not an act but a habit.',
        source: 'Aristotle',
        citation: 'Wisdom Quotes',
        year: ''
    },
    {
        quote: 'You can do anything, but not everything.',
        source: 'David Allen',
        citation: '',
        year: '1997'
    }
    
];

function getRandomQuote() {
    
var ramdonQuote = Math.floor(Math.random() * quotes.length);
    return ramdonQuote; 
}

function printQuote() {
    
   var randomQuoteNumber = getRandomQuote();
   
    
    var html = '<p class="quote">' + quotes[randomQuoteNumber].quote + '</p>';
    html += '<p class="source">' + quotes[randomQuoteNumber].source;
    
    if ((quotes[randomQuoteNumber].citation) === ''){
        
    }else {
        
    html += '<span class="citation">' + quotes[randomQuoteNumber].citation + '</span>';
    }
    if ((quotes[randomQuoteNumber].year) === ''){
        
    }else {
        
    html += '<span class="year">' + quotes[randomQuoteNumber].year + '</span>';
    }
    
    html += '</p>';
    
    document.getElementById('quote-box').innerHTML = html;
    
    
}

// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);


