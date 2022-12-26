import { createCustomer } from './functions';
import { Author, Book, Person } from './interfaces';

type BookProperties = keyof Book; // 'isbn';
type PersonBook = Person & Book;
type BookOrUndefined = Book | undefined;

export {BookProperties, PersonBook, BookOrUndefined };

export type BookRequiredFields = Required<Book>;
export type UpdatedBook = Partial<Book>;
export type AuthorWoEmail = Omit<Author, 'email'>;

export type СreateCustomerFunctionType  = typeof createCustomer;

export type fn = (a: string, b: number, c: boolean) => symbol;

export type Param1<T> = T extends (a: infer R, b: number, c: boolean) => symbol? R: never;
export type Param2<T> = T extends (a: string, b: infer R, c: boolean) => symbol? R: never;
export type Param3<T> = T extends (a: string, b: number, c: infer R) => symbol? R: never;

export type P1 = Param1<fn>;
export type P2 = Param2<fn>;
export type P3 = Param3<fn>;

export type RequiredProps<T extends object> = {
    [prop in keyof T]: {} extends Pick<T, prop> ? never : prop
}[keyof T];

export type OptionalProps<T extends object> = {
    [prop in keyof T]: {} extends Pick<T, prop> ? prop : never
}[keyof T];

type BookRequiredProps  = RequiredProps<Book>;
type BookOptionalProps = OptionalProps<Book>;

type RemoveProps <T extends object, TProps extends keyof T> = {
    [prop in keyof T as Exclude<prop, TProps>]: T[prop];
};
type BookRequiredPropsType = RemoveProps<Book, BookRequiredProps>;
type BookOptionalPropsType = RemoveProps<Book, BookOptionalProps>;