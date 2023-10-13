const loadQuote = () => {
    fetch('https://api.kanye.rest/')
    .then(res => res.json())
    .then(data => Quotes(data))
}



const Quotes = dataReplace => {
    const blockQuote = document.getElementById('quote');
    console.log(dataReplace);
    blockQuote.innerHTML = dataReplace.quote;
}