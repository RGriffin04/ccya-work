
const books = [
    {title: "A song of ice and fire", description:"Many familys fighting over the throne"},
    {title:"The lord of the rings", description:"An adventure to destroy a magic ring"},
    {title:"One piece", description:"Best thing ever created, life changing read"},
    {title:"The hobbit", description:"Hobbit, dwarves and a Wizard go and try to kill a dragon"},
    {title:"Attack on titan", description:"Humanity vs monsters"},
    {title:"Hunter X hunter", description:"Friends travelling in an evil world"},
];

const orders = [
    
]

document.addEventListener('DOMContentLoaded', ()=>{
    const list = document.querySelector('#book-list');
    for(let book of books){
        const bookItem = document.createElement('li')
        bookItem.textContent = `${book.title} - ${book.description}`
        list.appendChild(bookItem);
    }
});