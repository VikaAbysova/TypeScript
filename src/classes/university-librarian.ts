/* eslint-disable no-underscore-dangle */
import * as Interfaces from './../interfaces';
import { logMethod, logParameter, logger, sealed, writable } from './decorators';

// @sealed('UniversityLibrarian')
// @logger
class UniversityLibrarian implements Interfaces.Librarian {
    name: string;
    email: string;
    department: string;
    @logMethod
    assistCustomer(@logParameter custName: string, @logParameter bookTitle: string): void {
        console.log(`${this.name} is assisting ${custName} with book ${bookTitle}`);
    }
    // @writable(true)
    assistFaculty(): void {
        console.log('Assisting faculty');
    }
    // @writable(false)
    teachCommunity(): void {
        console.log('Teaching community');
    }

}

export { UniversityLibrarian };