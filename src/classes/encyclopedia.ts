import { ReferenceItem } from './reference-item';

export default class Encyclopedia extends ReferenceItem {
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