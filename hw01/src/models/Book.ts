import { AbstractBook } from "./AbstractBook";
import { Author } from "./Author";


export class Book extends AbstractBook {

  constructor(title: string, year: number, author: Author ) {
    super(title, year, author);
    author.addBook(this);
  }

  getTitle(): string {
    return this.title;
  }

  getYear(): number {
    return this.year;
  }

  getAuthor(): Author {
    return this.author;
  }

  getDescription(): string {
    return `Book: "${this.title}" (${this.year}) by ${this.author.getName()}`;
  }

}
