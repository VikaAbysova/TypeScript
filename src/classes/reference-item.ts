/* eslint-disable no-underscore-dangle */

abstract class ReferenceItem {

    abstract printCitation(): void;
    // title: string;
    // year: number;
    // constructor(newTitle: string, newYear: number){
    //     console.log('Creating a new ReferenceItem...');
    //     this.title = newTitle;
    //     this.year = newYear;
    // }
    #id: number;

    private _publisher: string;

    static department: string = 'Research department: static';

    get publisher(){
        return this._publisher.toUpperCase();
    }

    set publisher(newPublisher: string){
        this._publisher = newPublisher;
    }

    constructor(
        id: number,
        public title: string,
        protected year: number,
    ) {
        console.log('Creating a new ReferenceItem...');
        this.#id = id;
    }

    printItem(): void{
        console.log(`${this.title} was published in ${this.year}`);
        console.log(ReferenceItem.department);
        console.log('chek', Object.getPrototypeOf(this).constructor.department);
    }

    getID(){
        return this.#id;
    }
}

export { ReferenceItem };