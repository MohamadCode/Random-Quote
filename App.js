const Quotediv = document.getElementById("quoteid")
const Quotes = ["Do the Hard work, especially when you don't feel like it!'Hamza Ahmed' ",
"your new life is gonna cost you your old one ! 'Profound Learning' ", 
"To Become who you want,  you must sacrfice who you are ! 'Zayn' ", 
"STAY HARD 'David Goggins'" ]


genrate_quote.addEventListener("click", function() { 
    Quotediv.textContent = Quotes [Math.floor(Math.random() * Quotes.length)]
    

})
