//Declaring an object
let book : { BookName : String
    BookAuthor : String
    BookPublishedYear : Number
    BookPrice : Number
}
// Assigning Values in object
book={ BookName : "Code with TypeScript",
    BookAuthor : "The Quratulain",
    BookPublishedYear : 2010,
    BookPrice : 2000
}

console.log(`My Favourite Book Name is ${book.BookName} Which is written by ${book.BookAuthor} In ${book.BookPublishedYear} with the updated Price of Rs. ${book.BookPrice}`);