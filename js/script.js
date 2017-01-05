//global var with all objects in an Array
var quotesDisplayed = []; // created strings to storage all quotes once they are called and generated.

quotes = [
    {
        quote: 'You can do anything, but not everything.',
        source: 'David Allen',
        citation: 'Wisdom Quotes',
        year: '2001',
        tag: 'Recent',
        time: ' 2 days ago',
        id: 1
    },
    {
        quote: 'Perfection is achieved, not when there is nothing more to add, but when there is nothing left to take away.',
        source: 'Antoine de Saint-Exupéry',
        citation: 'Wisdom Quotes',
        year: '1980',
        tag: 'Old',
        time: ' 4 weeks ago',
        id: 2
    },
    {
        quote: 'The richest man is not he who has the most, but he who needs the least.',
        source: 'Unknown Author',
        citation: 'Wisdom Quotes',
        year: '1999',
        tag: 'Old',
        time: ' 8 weeks ago',
        id: 3
    },
    {
        quote: 'You miss 100 percent of the shots you never take.',
        source: 'Wayne Gretzky',
        citation: '',
        year: '2005',
        tag: 'recent',
        time: ' 1 day ago',
        id: 4
    },
    {
        quote: 'You must be the change you wish to see in the world.',
        source: 'Gandhi',
        citation: 'Wisdom Quotes',
        year: '2007',
        tag: 'Old',
        time: ' 1 moth ago',
        id: 5
    },
    {
        quote: 'When hungry, eat your rice; when tired, close your eyes. Fools may laugh at me, but wise men will know what I mean.',
        source: 'Lin-Chi',
        citation: '',
        year: '1930',
        tag: 'Old',
        time: ' 4 weeks ago',
        id: 6
    },
    {
        quote: 'The third-rate mind is only happy when it is thinking with the majority. The second-rate mind is only happy when it is thinking with the minority. The first-rate mind is only happy when it is thinking.',
        source: 'A. A. Milne',
        citation: 'Wisdom Quotes',
        year: '',
        tag: 'recent',
        time: ' 1 hour ago',
        id: 7
    },
    {
        quote: 'We are what we repeatedly do; excellence, then, is not an act but a habit.',
        source: 'Aristotle',
        citation: 'Wisdom Quotes',
        year: '',
        tag: 'Old',
        time: ' 1 year ago',
        id: 8
    }
    
];

// random number generator, based in the number of objects in the array, I removed the +1 to be able to include 0 since 0 is the first position and could be selected is well.

function getRandomQuote() {
    
var ramdonQuote = Math.floor(Math.random() * quotes.length);
    return ramdonQuote; 
}

//creation of the funciton to print one quote at the time.

function printQuote() {
    
   var randomQuoteNumber = getRandomQuote(); // get random number from 0 to the max numbers of objects.
    
   
    
   for (var i = 0; i <= quotes.length; i += 1){
       
       if (quotesDisplayed.indexOf(quotes[randomQuoteNumber].id) === -1){
           randomQuoteNumber = randomQuoteNumber;
       }else {
           randomQuoteNumber = getRandomQuote();
           
       }
       
       var html = '<p class="quote">' + quotes[randomQuoteNumber].quote + '</p>'; // selectiong the quote
    html += '<p class="source">' + quotes[randomQuoteNumber].source; // selecting the source and opening paragraph code for citation and year
    
    if ((quotes[randomQuoteNumber].citation) === ''){ // checking if citation does not exists
        
    }else { 
        
    html += '<span class="citation">' + quotes[randomQuoteNumber].citation + '</span>'; // if citation exists print it
    }
    if ((quotes[randomQuoteNumber].year) === ''){ // checking if year exists
        
    }else {
        
    html += '<span class="year">' + quotes[randomQuoteNumber].year + '</span>'; // if years exist print it
    }
    
    html += '</p>'; // closing paragraph code for citation and year.
    html += '<p>' + quotes[randomQuoteNumber].tag + ' Quote, Added' + quotes[randomQuoteNumber].time + '</p>'; // adding new information
       
       
   }    
    
    colorSelector = Math.floor(Math.random() * 5) + 1; // getting a random number between 1 to 5
    colorSelector = 'color' + colorSelector; // creating a random class from color1 to color5
    
    
    
    document.getElementById('color').className = colorSelector; // changing the class color each time the funcion is called.
    document.getElementById('quote-box').innerHTML = html; // printing everyting at the quote-box div selecting it by the ID
    
    quotesDisplayed.push(quotes[randomQuoteNumber].id); // add the quote ID to a created strings to identiy if it exists
    console.log(quotes[randomQuoteNumber].quote); // show quotes at console.
    
    timeoutID = window.setTimeout(printQuote, 5000); // after clicking the button 1 time the page will show the next quote after 5 seconds.
    
    
    if (quotesDisplayed.length === quotes.length){ // alert visitors that he or she has already saw all quotes, and if visitors click again all quotes will  be generated again.
        alert('All Quotes Has Been Displayed');
    }
    
    
    
}

// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false); // clicks to get random quotes :D

// WORKED!!


