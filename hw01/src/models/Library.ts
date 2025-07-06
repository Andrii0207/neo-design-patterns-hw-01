import { Author } from "./Author";
import { Copy } from "./Copy";
import { Reader } from "./Reader";
import { Book } from "./Book";
import { AbstractBook } from "./AbstractBook";


export class Library {
  private books: AbstractBook[] = [];
  private authors: Author[] = [];
  private copies: Copy[] = [];
  private readers: Reader[] = [];

  addBook(book: AbstractBook): void {
    this.books.push(book);
  }

  addAuthor(author: Author): void {
    this.authors.push(author);
  }

  addCopy(copy: Copy): void {
    this.copies.push(copy)
  }

  addReader(reader: Reader): void {
    this.readers.push(reader);
  }

  getAvailableCopies(book: Book): Copy[] {
    return this.copies.filter(copy =>  copy.isCopyAvailable());
  }

  searchBooksByAuthor(author: string): AbstractBook[]  {
    return this.books.filter(book => {
      if (book instanceof Book) {
        return book.getAuthor().getName() === author;
      }
      console.log(`Author ${author} not found.`);
      return false;
    });
  }
}

