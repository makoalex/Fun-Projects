let apiResult = [];
const newQuote= ()=>{
    const quote = apiResult[Math.floor(Math.random()*apiResult.length)]
    console.log(quote)
}

const getQuotes= async()=>{
    const apiUrl = 'https://type.fit/api/quotes';
    try{
        const response= await fetch(apiUrl);
        apiResult=await response.json();
        console.log(apiResult)
        newQuote()
    }catch(error){

    }
}

getQuotes()