/* eslint-disable no-redeclare */
import { Category } from './enums';
import { Book, TOptions } from './interfaces';
import { BookOrUndefined, BookProperties } from './types';
import RefBook from './classes/encyclopedia';

export function getAllBooks (): readonly Book[] {
    const books = <const> [
        { id: 1, title: 'Refactoring JavaScript', category: Category.JavaScript, author: 'Evan Burchard', available: true},
        { id: 2, title: 'JavaScript Testing', category: Category.JavaScript, author: 'Liang Yuxian Eugene', available: false },
        { id: 3, title: 'CSS Secrets', category: Category.CSS, author: 'Lea Verou', available: true },
        { id: 4, title: 'Mastering JavaScript Object-Oriented Programming', category: Category.JavaScript, author: 'Andrea Chiarelli', available: true }];
    return books;
}


export function logFirstAvailable(books: readonly Book[] = getAllBooks()): void {
    console.log(`The number of books: ${books.length}`);

    const title = books.find(book => book.available).title;
    console.log(`First available book: ${title}`);
}


export function getBookTitlesByCategory(inputCategory: Category = Category.JavaScript): string[]  {
    const books = getAllBooks();

    const filteredBooks = books.filter(book => book.category === inputCategory).map (book => book.title);

    return filteredBooks;
}


export function logBookTitles(titles: Array<string>): void {
    titles.forEach(title => console.log (title));
}

export function getBookAuthorByIndex(index: number): [title: string, author: string] {
    const books = getAllBooks();

    const para: [string, string]  = [books[index].title, books[index].author];
    // const {title, author} = books[index];
    return para;
}

export function calcTotalPages(): void {
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

export function createCustomerID(name: string, id: number): string {
    return `${id} / ${name}`;
}

export function createCustomer(name: string, age?: number, city?: string): void {
    console.log(`Customer: ${name}`);

    if (age) {
        console.log(`Customer age: ${age}`);
    }

    if (city) {
        console.log(`Customer city: ${city}`);
    }
}

export function getBookByID(id: Book['id']): BookOrUndefined {
    const books = getAllBooks();
    return books.find(book => book.id === id);
}

export function checkoutBooks(customer: string, ...bookIDs: number[]): string[] {
    // console.log(`Customer name: ${customer}`);
    return bookIDs
        .map(id => getBookByID(id))
        .filter(book => book.available)
        .map(book => book.title);
}

export function getTitles(author: string): string[];
export function getTitles(available: boolean): string[];
export function getTitles(id: number, available: boolean): string[];
export function getTitles(...args: [string | boolean] | [number, boolean]): string[] {
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

export function checkedOutBooks(data: any): asserts data is string {
    if(typeof data !== 'string') {
        // throw new Error ('value should have been a string');
    }
}

export function bookTitleTransform(title: any): string {
    checkedOutBooks(title);
    return [...title].reverse().join('');
}

export function printBook(book: Book): void {
    // console.log(`${book.title} by ${book.author}`);
}

export function someDamade (reason: string) {
    console.log(`It's a damage: ${reason}`);
}

export function getProperty(book: Book, prop: BookProperties): any {
    const value = book[prop];
    return typeof value === 'function'?value.name:value;
}

export function getObjectProperty<TObject, TKey extends keyof TObject>(obj: TObject, prop: TKey): TObject[TKey] | string {
    const value = obj[prop];
    return typeof value === 'function'?value.name:value;
}

export function setDefaultConfig(options: TOptions) {
    options.duration??= 100,
    options.speed ??= 60;
    return options;
}

export function assertRefBookInstance (condition: any): asserts condition {
    if (!condition) {
        throw new Error ('It is not an instance of RefBook');
    }
}

export function printRefBook (data: any): void {
    assertRefBookInstance (data instanceof RefBook);
    data.printItem();
}


export function purge<T>(inventory: Array<T>): T[] {
    return inventory.slice(2);
}