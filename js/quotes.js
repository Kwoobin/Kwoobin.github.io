const quotes = [
{
    quote: "명언1",
    author: "rladnqls1",
},
{
    quote: "명언2",
    author: "rladnqls2",
},
{
    quote: "명언3",
    author: "rladnqls3",
},
{
    quote: "명언4",
    author: "rladnqls4",
},
{
    quote: "명언5",
    author: "rladnqls5",
},
{
    quote: "명언6",
    author: "rladnqls6",
},
{
    quote: "명언7",
    author: "rladnqls7",
},
{
    quote: "명언8",
    author: "rladnqls8",
},
{
    quote: "명언9",
    author: "rladnqls9",
},
{
    quote: "명언10",
    author: "rladnqls10",
},
];
const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;