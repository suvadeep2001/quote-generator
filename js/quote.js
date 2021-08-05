var arrayOfQuotes = [

    {
        "author": "Dalai Lama",
        "quote": "The purpose of our lives is to be happy."
    },
    {
        "author": "John Lennon",
        "quote": "Life is what happens when you’re busy making other plans."
    },

    {
        "author": "Will Smith",
        "quote": "Money and success don’t change people; they merely amplify what is already there."
    },
    {
        "author": "Steve Jobs",
        "quote": "Your time is limited, so don’t waste it living someone else’s life. Don’t be trapped by dogma – which is living with the results of other people’s thinking"
    },
    {
        "author": "Leo Burnett",
        "quote": "Curiosity about life in all of its aspects, I think, is still the secret of great creative people."
    },
    {
        "author": "Ashton Kutcher",
        "quote": "Don’t settle for what life gives you; make life better and build something."
    },
    {
        "author": "George Clooney",
        "quote": "You never really learn much from hearing yourself speak"
    }

]

function randomSelector(arrayLength) {
    return Math.floor(Math.random() * arrayLength);
}

function generateQuote() {

    var randomNumber = randomSelector(arrayOfQuotes.length);

    document.getElementById("quoteOutput").innerHTML = '"' + arrayOfQuotes[randomNumber].quote + '"';
    document.getElementById("authorOutput").innerHTML = '-' + arrayOfQuotes[randomNumber].author;
}

