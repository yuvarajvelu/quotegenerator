let quotesAuthor = [["You only live once, but if you do it right, once is enough.","Mae West","#48BB78"],["You've gotta dance like there's nobody watching,Love like you'll never be hurt,Sing like there's nobody listening,And live like it's heaven on earth.","William W. Purkey","#4A5568"],["You know you're in love when you can't fall asleep because reality is finally better than your dreams.","Dr. Seuss","#F56565"],["A room without books is like a body without a soul.","Marcus Tullius Cicero","#F6AD55"],["Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.","Bernard M.Baurch"],["So many books, so little time.","Frank Zappa","#975A16"],["Be yourself; everyone else is already taken.","Oscar Wilde","#4FD1C5"],["Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.","Albert Einstein","#3182CE"],["I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.","Marilyn Munroe","#3C366B"]["Neither seek nor avoid, take what it comes","Swami Vivekananda","#F687B3"],["Strive not to be of success, but rather to be of value","Albert Einstein","#44337A"],["Do or do not. There is no try","Yoda","#3C366B"],["God has no religion","Mahatma Gandhi","#234E52"],["The best fighter is never angry","Lao Tzu","#22543D"],["Live as if you were to die tomorrow. Learn as if you were to live forever.","Mahatma Gandhi","#744210"],["That which does not kill us makes us stronger.","Fredrich Nietzsche","#7B341E"],["Do what you can, with what you have, where you are.","Theodore Roosevelt","#742A2A"],["This above all: to thine own self be true.","William Shakespeare","#1A202C"]];
let quote = document.getElementById("quotes");
let authorName = document.getElementById("author");
let displayBgColor = document.getElementsByClassName("bgcolor");
let displayColor = document.getElementsByClassName("color");
let tweet = document.getElementById("tweet-quote");
let buttonColor = document.getElementById("new-quote")
function change() {
    let index = Math.floor(Math.random()*Math.floor(quotesAuthor.length));
    quote.innerHTML = quotesAuthor[index][0];
    authorName.innerText = "-"+" "+quotesAuthor[index][1];  
    buttonColor.style.color = "white";
    for(let i =0 ; i < displayColor.length; i++) {
        displayColor[i].style.color = quotesAuthor[index][2];
    }
    for(let i = 0; i < displayBgColor.length; i++) {
        displayBgColor[i].style.backgroundColor = quotesAuthor[index][2];
    }
    tweet.setAttribute("href","https://twitter.com/intent/tweet?text="+quotesAuthor[index][0])
}    