/* eslint-disable no-undef */
/* eslint-disable no-underscore-dangle */
import { positiveInteger } from './decorators';
import { ReferenceItem } from './reference-item';

export default class Encyclopedia extends ReferenceItem {
    private _copies: number;

    @positiveInteger
    get copies(): number {
        return this._copies;
    }

    set copies(value: number) {
        this._copies = value;
    }

    constructor(
        public edition: number,
        id: number,
        title: string,
        year: number
    ){
        super(id, title, year);
    }

    override printItem(){
        super.printItem();
        console.log(`Edition: edition ${this.year}`);
    }

    printCitation() {
        console.log(`${this.title} - ${this.year}`);
    }
}