##This is a quote app . You can generate a new quote everyday.

# selecting random number 

function randomSelector(arrayLength) { return Math.floor(Math.random() * arrayLength); }
======= 

# generating quote 

function generateQuote()
{ 
var randomNumber = randomSelector(arrayOfQuotes.length);
document.getElementById("quoteOutput").innerHTML = '"' + arrayOfQuotes[randomNumber].quote + '"'; 
document.getElementById("authorOutput").innerHTML = '-' + arrayOfQuotes[randomNumber].author; 
}


#life demo

![2](https://user-images.githubusercontent.com/68159874/128416821-4029be04-0ee2-4365-8bf8-b57e6c8d6791.png)
