import { Shelf, ReferenceItem, UL, RefBook } from './classes';
import { Category } from './enums';
import { purge, printRefBook, checkoutBooks, createCustomer, createCustomerID, printBook, someDamade, getAllBooks, getObjectProperty } from './functions';
import { Magazine, Librarian, Author, Book, Logger, TOptions } from './interfaces';
import { BookRequiredFields, PersonBook, UpdatedBook, СreateCustomerFunctionType } from './types';
import { Library } from './classes/library';
import { Shelf2 } from './classes/shelf';
import { UniversityLibrarian } from './classes/university-librarian';


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

// const library: Library = {
//     id: 10,
//     address: 'Kyiv',
//     name: 'Vika'
// };

// console.log(library);

// Task 7.01  =======================================================

// const inventory: Book[] = [

//     { id: 10, title: 'The C Programming Language', author: '???', available: true, category: Category.Software},
//     { id: 11, title: 'Code Complete', author: 'Steve McConnell', available: true, category: Category.Software },
//     { id: 12, title: '8-Bit Graphics with Cobol', author: 'A. B.', available: true, category: Category.Software },
//     { id: 13, title: 'Cool autoexec.bat Scripts!', author: 'C. D.', available: true, category: Category.Software }

// ];

// const result1 = purge(inventory);
// console.log(result1);

// const result2 = purge([1, 2, 3]);
// console.log(result2);

// Task 7.02, 7,03 =================================================================

// const bookShelf: Shelf<Book> = new Shelf<Book>();
// const bookShelf = new Shelf<Book>();

// inventory.forEach(book => {
//     bookShelf.add(book);
// });

// console.log(bookShelf.getFirst().title);

// const magazines: Magazine[] =
// [
//     { title: 'Programming Language Monthly', publisher: 'Code Mags' },
//     { title: 'Literary Fiction Quarterly', publisher: 'College Press' },
//     { title: 'Five Points', publisher: 'GSU' }
// ];

// const magazineShelf = new Shelf<Magazine>();

// magazines.forEach(magazine => {
//     magazineShelf.add(magazine);
// });

// console.log(magazineShelf.getFirst().title);

// magazineShelf.printTitles();

// console.log(magazineShelf.find('Five Points'));

// console.log(getObjectProperty(magazines[0], 'title'));

// console.log(getObjectProperty(inventory[1], 'title'));



// console.log(bookShelf);
// console.log(magazineShelf);

// let a = [{key1: 1}, {key2: 3}];


// const bookShelf2 = new Shelf2();

// inventory.forEach(book => bookShelf2.add(book));

// console.log(bookShelf2.getFirst().title);

// const magazineShelf2 = new Shelf2();

// magazines.forEach(magazine => {
//     magazineShelf2.add(magazine);
// });

// console.log(magazineShelf2.getFirst().title);


// Task 7.04 ==================================================

// const bookRequiredFields: BookRequiredFields = {
//     id: 1,
//     title: 'Learn Angular',
//     author: 'Anna',
//     available: false,
//     category: Category.Angular,
//     pages: 100,
//     markDamaged: null
// };

// const updatedBook: UpdatedBook = {
//     id: 2,
//     title: 'Learn React',
//     author: 'Olga',
//     available: true,
//     category: Category.Software,
//     pages: 400,
//     markDamaged: null
// };

// let params: Parameters<СreateCustomerFunctionType>;
// params = ['Vika', 34, 'Kyiv'];
// createCustomer(...params);

// Task 8.01, 8.02 ====================================================
// UL.UniversityLibrarian['b'] = 3;
// const favoriteLibrarian = new UL.UniversityLibrarian();
// const favoriteLibrarian2 = new UL.UniversityLibrarian();

// UL.UniversityLibrarian.prototype['a'] = 3;
// console.log(favoriteLibrarian);
// favoriteLibrarian.name = 'Anna';
// favoriteLibrarian['printLibrarian']();


// Task 8.03 ==============================================================

// const favoriteLibrarian = new UL.UniversityLibrarian();
// favoriteLibrarian.assistFaculty = null;
// favoriteLibrarian.teachCommunity = null;
// console.log(favoriteLibrarian);

// Task 8.04 ============================================================

// const refBook: RefBook = new RefBook (1, 22, 'Type Script learning', 2023);
// refBook.printItem();
//


// Task 8.05 ==================================================================

const favoriteLibrarian = new UL.UniversityLibrarian();
console.log(favoriteLibrarian);
favoriteLibrarian.name = 'Anna';
favoriteLibrarian.assistCustomer('Boris', 'Learn TS');



