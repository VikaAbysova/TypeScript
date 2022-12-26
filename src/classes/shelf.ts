export default class Shelf<T extends ShelfItem> {
    private items: T[] = [];
    add(item: T): void {
        this.items.push(item);
    }
    getFirst(): T {
        return this.items[0];
    }
    find(title: string): T {
        return this.items.find(item => item.title === title);
    }
    printTitles(): void {
        this.items.forEach(item => console.log(item.title));
    }
}

import { Book, Magazine, ShelfItem } from '../interfaces';



export class Shelf2 {
    private items: Book[] | Magazine[] = [];

    add(item: ( Book | Magazine)): void {
        this.items.push(item);
    }
    getFirst(): Book | Magazine {
        return this.items[0];
    }
}