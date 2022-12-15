import { Book, Person } from './interfaces';

type BookProperties = keyof Book; // 'isbn';
type PersonBook = Person & Book;
type BookOrUndefined = Book | undefined;

export {BookProperties, PersonBook, BookOrUndefined };