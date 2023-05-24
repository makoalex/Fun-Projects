let apiResult = [];
const quoteContainer = document.querySelector('#quotecontainer');
const quoteDisplay = document.querySelector('#quote');
const authorName = document.querySelector('#author');
const twitterBtn = document.querySelector('#twitter');
const newQuoteBtn = document.querySelector('#new-quote');

const newQuote = () => {
  const quote = apiResult[Math.floor(Math.random() * apiResult.length)];

  if (!quote.author) {
    authorName.textContent = 'Unknown';
  }
  authorName.textContent = quote.author;
  
  if (quote.text.length > 50) {
    quoteDisplay.classList.add('long-quote');
  } else {
    quoteDisplay.classList.remove('long-quote');
  }
  quoteDisplay.textContent = quote.text;
  

};
const buttonQuote =()=>{
    newQuoteBtn.addEventListener('click', newQuote)
}

const getQuotes = async () => {
  const apiUrl = 'https://type.fit/api/quotes';
  try {
    const response = await fetch(apiUrl);
    apiResult = await response.json();
    console.log(apiResult);
    newQuote();
  } catch (error) {}
};

getQuotes();
buttonQuote()
