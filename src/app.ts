import { ReferenceItem, UL, RefBook } from './classes';
import { Category } from './enums';
import { printRefBook, checkoutBooks, createCustomer, createCustomerID, printBook, setDefaultConfig, someDamade, getAllBooks } from './functions';
import { Librarian, Author, Book, Logger, TOptions } from './interfaces';
import { PersonBook } from './types';
import { Library } from './classes/library';

showHello('greeting', 'TypeScript');

function showHello(divName: string, name: string) {
    const elt = document.getElementById(divName);
    elt.innerText = `Hello from ${name}`;
}

// Task 2==============================================================



// type Book = {
//     id: number;
//     title: string;
//     author: string;
//     available: boolean;
//     category: Category;
// };


// Task 2.01=====================================================================

// console.log(getAllBooks());
// logFirstAvailable(getAllBooks());
// logBookTitles(getBookTitlesByCategory(Category.JavaScript));
// console.log(getBookAuthorByIndex(0));
// calcTotalPages();

// Task 3.01=====================================================================

// const myID: string = createCustomerID('Ann', 10);
// console.log(myID);

// let idGenerator: (name: string, id: number) => string;

// let idGenerator: typeof createCustomerID;

// idGenerator = (name: string, id: number) => `${id} / ${name}`;
// idGenerator = createCustomerID;

// console.log(idGenerator('Boris', 20));


// Task 3.02=======================================================================

// createCustomer('Vika', 35);

// console.log(getBookTitlesByCategory());
// console.log(logFirstAvailable());

// console.log(getBookByID(1));


// console.log(сheckoutBooks('NoName Customer', 1, 3, 4));

const myBooks = checkoutBooks('Ann', 1, 2, 4);

// console.log(myBooks);


// Task 3.03 =====================================================

// const checkedOutBooks = getTitles('Lea Verou');
// console.log(checkedOutBooks);

// Task 3.04 ============================================================

// console.log(bookTitleTransform('TypeScript is cool!'));
// console.log(bookTitleTransform(12));

// Task 4.01 ===============================================================

// const myBook: Book = {
//     id: 5,
//     title: 'Colors, Backgrounds, and Gradients',
//     author: 'Eric A. Meyer',
//     available: true,
//     category: Category.CSS,
//     year: 2015,
//     copies: 3
//     pages: 200,
//     markDamaged: (reason: string) => console.log(`Damaged: ${reason}`)
//     markDamaged: (reason: string) => console.log(`Damaged: ${reason}`)
// };

// printBook(myBook);

// myBook.markDamaged('missing back cover');

// Task 4.02 =========================================================================\

// let logDamage: Logger;

// logDamage = someDamade;

// logDamage('Hello');

// Task 4.03 =========================================

// const favoriteAuthor: Author = {
//     name: 'Edgar Po',
//     email: 'some_email@gmail.com',
//     numBooksPublished: 100
// };

// const favoriteLibrarian: Librarian = {
//     name: 'Edgar Po',
//     email: 'some_email@gmail.com',
//     department: 'fiction',
//     assistCustomer: (custName, bookTitle) => console.log(`The book is: ${custName} ${bookTitle}`)
//     // assistCustomer (custName, bookTitle) {
//     //     console.log(`The book is: ${custName} ${bookTitle}`);
//     // }
//     // assistCustomer: null
// };

// console.log(favoriteLibrarian.assistCustomer('Edgar Po', 'fiction'));


// Task 4.04 =============================================================

// const offer: any = {
//     book: {
//         title: 'Essential TypeScript',
//     },
// };

// console.log(offer.magazine);
// console.log(offer.magazine?.getTitle());
// console.log(offer.book.getTitle?.());
// console.log(offer.book.authors?.[0]);


// Task 4.05 ==================================================================





// console.log(getProperty(myBook, 'title'));
// console.log(getProperty(myBook, 'markDamaged'));
// console.log(getProperty(myBook, 'isbn'));


// Task 5.01 ===================================================



// let ref = new ReferenceItem(123, 'TypeScript', 2022);
// console.log(ref);
// ref.printItem();

// ref.publisher = 'typescript';
// console.log(ref.publisher);
// console.log(ref.getID());



// const refBook: RefBook  = new RefBook(1, 22, 'Type Script learning', 2023);
// console.log(refBook);

// refBook.printItem();
// console.log(refBook.getID());
// console.log(refBook.edition);

// Task 5.03 ==============================================================

// let refBook: RefBook = new RefBook (2, 22, 'Type Script learning', 2023);
// refBook.printCitation();


// Task 5.04 ======================================================================



// let favoriteLibrarian: Librarian = new UL.UniversityLibrarian();
// favoriteLibrarian.name = 'Anna';
// favoriteLibrarian.assistCustomer('Boris', 'TypeScript');

// Task 5.05 ==========================================================



// const personbook: PersonBook = {
//     name: 'Anna',
//     author: 'Anna',
//     available: false,
//     category: Category.Angular,
//     email: 'anna@gmail.com',
//     id: 168,
//     title: 'TypeScript'
// };



// const opt: TOptions = {duration: 20};
// const opt2 = setDefaultConfig(opt);
// console.log(opt);
// console.log(opt2);
// console.log(Object.is(opt, opt2));

// Task 6.03, 6.04 ==========================================================

// const refBook2: RefBook = new RefBook (1, 22, 'Type Script learning', 2023);
// printRefBook(refBook2);

// const favoriteLibrarian: Librarian = new UL.UniversityLibrarian();
// printRefBook(favoriteLibrarian);


// Task 6.05 =================================================

// const flag = true;

// if (flag) {
//     import('./classes')
//         .then(m => {
//             const reader = new m.Reader();
//             reader.name = 'Anna';
//             reader.take(getAllBooks()[0]);

//             console.log(reader);
//         })
//         .catch(err => console.log(err))
//         .finally(() => console.log('Complete!'));
// }

// if (flag) {
//     const m =  await import('./classes');
//     const reader = new m.Reader();
//     reader.name = 'Anna';
//     reader.take(getAllBooks()[0]);

//     console.log(reader);
// }


// Task 6.06 ===============================================

// const library: Library = new Library();

const library: Library = {
    id: 10,
    address: 'Kyiv',
    name: 'Vika'
};

console.log(library);
