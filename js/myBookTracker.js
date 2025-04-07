let loggedIn = true;        //used for exit function

//array of objects = my books
let library = [
    {
        title: "36 timmar",
        author: "Bergman, David",
        isRead: true,
    },
    {
        title: "6 dagar",
        author: "Bergman, David",
        isRead: false,
    },
    {
        title: "Drönarhjärta",
        author: "Wilderäng, Lars",
        isRead: true,
    },
    {
        title: "Jägarhjärta",
        author: "Wilderäng, Lars",
        isRead: false,
    },
    {
        title: "Döda kvinnor förlåter inte",
        author: "Wennstam, Katarina",
        isRead: true,
    },
    {
        title: "Död mans kvinna",
        author: "Wennstam, Katarina",
        isRead: false,
    },
    {
        title: "Flickan i Stenparken",
        author: "Kjellsdotter, Nilla",
        isRead: true,
    },
    {
        title: "Himmelsgården",
        author: "Kjellsdotter, Nilla",
        isRead: false,
    },
];
//addBook() – asks for details and adds a new book object to the library
function addBook() {
    newTitle = prompt("Add book to list. Enter title:");
    newAuthor = prompt("Enter author: ");
    let haveRead = prompt("Have you read the book already? Y/N");
    if (haveRead.toLowerCase() === "y") {
        isNewRead = true;
    } else {
        isNewRead = false;
    }
    let newBook = {
        title: newTitle,
        author: newAuthor,
        isRead: isNewRead,
    }
    library.push(newBook);
    alert("Your book have now been added to your library.");
}
//remove a book
function removeBook(removeBookTitle) {
    let book = library.find(book => book.title === removeBookTitle);
    let positionRemove = library.indexOf(book);
    if (positionRemove < 0) {
        alert("Invalid choice");
    } else {
    library.splice(positionRemove, 1);
    alert("Your book have now been removed from your library.");
    }   
}
//listBooks() – display a list of all books
function listBooks() {
    console.log("These are all my books: ");
    for (i = 0; i < library.length; i++) {
        console.log(`${library[i].title}; by: ${library[i].author}`);
    }
}
//markAsRead(title) – finds a book by title and sets isRead to true
function markAsRead(findTitle) {
    let book = library.find(book => book.title === findTitle);
    if (book === undefined) {
        alert("Invalid choice");
    } else {
        book.isRead = true;
        alert("This book is now marked as read");
    }
}
//list only unread books
function booksNotRead() {
    let bookNotRead = library.filter(book => book.isRead === false);
    console.log("These books are not read yet:");
    for (i = 0; i < bookNotRead.length; i++) {
        console.log(`${bookNotRead[i].title}; by: ${bookNotRead[i].author}`);
    }
}
//user interface function
function myBookTracker() {
    while(loggedIn) {
        const choice = prompt(`Welcome to my Book Tracker. Enter your choice: 
            1. Add book to list
            2. Remove book from list
            3. List all books
            4. List all books not read yet
            5. Mark book as read
            6. Exit
            Enter your choice as a number.`);
        
        switch(choice) {
            case "1": 
                addBook();
                break;
            case "2":
                const removeBookTitle = prompt("Enter the title of the book to remove from your library: ");
                removeBook(removeBookTitle);
                break;
            case "3":
                listBooks();
                break;
            case "4":
                booksNotRead();
                break;
            case "5":
                const findTitle = prompt("Enter the title of the book to mark as read: ");
                markAsRead(findTitle);
                break;
            case "6":
                loggedIn = false;
                alert("Your are now logged out. Enjoy your reading.");
                break;
            default: 
                alert("Invalid choice");
                break;
        }
    }
}
myBookTracker();
