/* eslint-disable no-redeclare */

showHello('greeting', 'TypeScript');

function showHello(divName: string, name: string) {
    const elt = document.getElementById(divName);
    elt.innerText = `Hello from ${name}`;
}

// Task 2==============================================================

enum Category { JavaScript, CSS, HTML, TypeScript, Angular };

// type Book = {
//     id: number;
//     title: string;
//     author: string;
//     available: boolean;
//     category: Category;
// };

interface Book {
    id: number;
    title: string;
    author: string;
    available: boolean;
    category: Category;
    pages?: number;
    markDamaged?(reason: string): void;
};

function getAllBooks (): readonly Book[] {
    const books = <const> [
        { id: 1, title: 'Refactoring JavaScript', category: Category.JavaScript, author: 'Evan Burchard', available: true},
        { id: 2, title: 'JavaScript Testing', category: Category.JavaScript, author: 'Liang Yuxian Eugene', available: false },
        { id: 3, title: 'CSS Secrets', category: Category.CSS, author: 'Lea Verou', available: true },
        { id: 4, title: 'Mastering JavaScript Object-Oriented Programming', category: Category.JavaScript, author: 'Andrea Chiarelli', available: true }];
    return books;
}


function logFirstAvailable(books: readonly Book[] = getAllBooks()): void {
    console.log(`The number of books: ${books.length}`);

    const title = books.find(book => book.available).title;
    console.log(`First available book: ${title}`);
}


function getBookTitlesByCategory(inputCategory: Category = Category.JavaScript): string[]  {
    const books = getAllBooks();

    const filteredBooks = books.filter(book => book.category === inputCategory).map (book => book.title);

    return filteredBooks;
}


function logBookTitles(titles: Array<string>): void {
    titles.forEach(title => console.log (title));
}

function getBookAuthorByIndex(index: number): [title: string, author: string] {
    const books = getAllBooks();

    const para: [string, string]  = [books[index].title, books[index].author];
    // const {title, author} = books[index];
    return para;
}

function calcTotalPages(): void {
    const data = <const> [
        { lib: 'libName1', books: 1_000_000_000, avgPagesPerBook: 250 },
        { lib: 'libName2', books: 5_000_000_000, avgPagesPerBook: 300 },
        { lib: 'libName3', books: 3_000_000_000, avgPagesPerBook: 280 }
    ];

    const r = data.reduce((acc: bigint, obj) => {
        return acc + (BigInt(obj.books) * BigInt(obj.avgPagesPerBook));
    }, 0n);

    return console.log(r);
}

// Task 2.01=====================================================================

// console.log(getAllBooks());
// logFirstAvailable(getAllBooks());
// logBookTitles(getBookTitlesByCategory(Category.JavaScript));
// console.log(getBookAuthorByIndex(0));
// calcTotalPages();

// Task 3.01=====================================================================

function createCustomerID(name: string, id: number): string {
    return `${id} / ${name}`;
}

const myID: string = createCustomerID('Ann', 10);
// console.log(myID);

// let idGenerator: (name: string, id: number) => string;

let idGenerator: typeof createCustomerID;

idGenerator = (name: string, id: number) => `${id} / ${name}`;
idGenerator = createCustomerID;

// console.log(idGenerator('Boris', 20));


// Task 3.02=======================================================================

function createCustomer(name: string, age?: number, city?: string): void {
    // console.log(`Customer: ${name}`);

    if (age) {
        // console.log(`Customer age: ${age}`);
    }

    if (city) {
        // console.log(`Customer city: ${city}`);
    }
}

createCustomer('Vika', 35);

// console.log(getBookTitlesByCategory());
// console.log(logFirstAvailable());

function getBookByID(id: Book['id']): Book | undefined {
    const books = getAllBooks();
    return books.find(book => book.id === id);
}

// console.log(getBookByID(1));


function сheckoutBooks(customer: string, ...bookIDs: number[]): string[] {
    // console.log(`Customer name: ${customer}`);
    return bookIDs
        .map(id => getBookByID(id))
        .filter(book => book.available)
        .map(book => book.title);
}

// console.log(сheckoutBooks('NoName Customer', 1, 3, 4));

const myBooks = сheckoutBooks('Ann', 1, 2, 4);

// console.log(myBooks);


// Task 3.03 =====================================================

function getTitles(author: string): string[];
function getTitles(available: boolean): string[];
function getTitles(id: number, available: boolean): string[];
function getTitles(...args: [string | boolean] | [number, boolean]): string[] {
    const books = getAllBooks();

    if (args.length === 1) {
        const [arg] = args;

        if (typeof arg === 'string') {
            return books
                .filter(book => book.author === arg)
                .map(book => book.title);
        } else if (typeof arg === 'boolean') {
            return books
                .filter(book => book.available === arg)
                .map(book => book.title);
        }
    } else if (args.length === 2) {
        const [id, available] = args;
        return books
            .filter(book => book.id === id && book.available === available)
            .map(book => book.title);
    }
}

// const checkedOutBooks = getTitles('Lea Verou');
// console.log(checkedOutBooks);



// Task 3.04 ============================================================

function checkedOutBooks(data: any): asserts data is string {
    if(typeof data !== 'string') {
        // throw new Error ('value should have been a string');
    }
}

function bookTitleTransform(title: any): string {
    checkedOutBooks(title);
    return [...title].reverse().join('');
}

// console.log(bookTitleTransform('TypeScript is cool!'));
// console.log(bookTitleTransform(12));


// Task 4.01 ===============================================================

function printBook(book: Book): void {
    // console.log(`${book.title} by ${book.author}`);
}

const myBook: Book = {
    id: 5,
    title: 'Colors, Backgrounds, and Gradients',
    author: 'Eric A. Meyer',
    available: true,
    category: Category.CSS,
    // year: 2015,
    // copies: 3
    pages: 200,
    markDamaged(reason: string) {
        console.log(`Damaged: ${reason}`);
    }
};

printBook(myBook);

myBook.markDamaged('missing back cover');


