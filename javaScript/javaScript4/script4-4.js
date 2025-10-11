const books = [
  { title: "Book1", author: "Author1", isAvailable: true },
  { title: "Book2", author: "Author2", isAvailable: true },
  { title: "Book3", author: "Author3", isAvailable: true },
  { title: "Book4", author: "Author4", isAvailable: false },
  { title: "Book5", author: "Author5", isAvailable: true },
];

function listBooks() {
    books.forEach((book) => {
        console.log(`${book.title} by ${book.author} - ${book.isAvailable ? 'Available' : 'borrowed'}`);
    });
}
// listBooks();

function markAsBorrowed(title) {
    for (let book of books) {
        if (book.title === title) {
            if (book.isAvailable) {
                book.isAvailable = false;
                console.log(`You have borrowed "${book.title}".`);
            } else {
                console.log(`Sorry, "${book.title}" is already borrowed.`);
            }
            
        }
        console.log("Book not found.");
        return;
    }
}

function markAsreturned(title) {}


function listbooksbyauthor(author) {
    const list = new Array();
    for (let book of books) {
        if (book.author === author) {
            list.push(book.title);
        }
    }
    return list;
}

// markAsBorrowed("Book2");
console.log(listbooksbyauthor("Author2"));
// listBooks();