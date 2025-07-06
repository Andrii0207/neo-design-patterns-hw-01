
import { Book } from "./Book";

export class Copy {
  private book: Book;
  private isAvailable: boolean = true;

  constructor(book: Book) {
    this.book = book;
  }

  setAvailability(status: boolean): void {
    this.isAvailable = status;
  }

  isCopyAvailable(): boolean {
    return this.isAvailable;
  }

  getBook(): Book {
    return this.book;
  }
}


//   class Cat{
//   name2 : string;
//   breed2: string;

//   constructor(name1: string, breed1: string) {
//     this.name2 = name1;
//     this.breed2 = breed1;
//   }
// }



// const myCat = new Cat("Whiskers", "Siamese");
// console.log(`My cat's name is ${myCat.name2} and it is a ${myCat.breed2} breed.`);