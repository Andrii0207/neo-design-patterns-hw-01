import { AbstractBook } from "./AbstractBook";
import { Book } from "./Book";

export class Author {
  private name: string;
  private booklist: string[] = [];
  
  constructor(name: string) {
    this.name = name;
  }

  getName(): string {
    return this.name;
  }

  addBook(book: AbstractBook): void {
    this.booklist.push(book.getTitle());
  }

  getBooks(): string[] {
    return this.booklist;
  }
}
