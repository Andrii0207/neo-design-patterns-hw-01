
import { AbstractBook } from "./AbstractBook";
import { Author } from "./Author";


export class EBook extends AbstractBook{
  private url: string;

  constructor(title: string, year: number, author: Author, url: string) {
    super(title, year, author);
    this.url = url;
    author.addBook(this);
  }

   getAuthor(): Author {
    return this.author;
  }

  getUrl(): string {
    return this.url;
  }

  getDescription(): string {
    return `EBook: "${this.title}" (${this.year}) by ${this.author.getName()}`;
  }
}
