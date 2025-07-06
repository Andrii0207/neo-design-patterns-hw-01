
import { AbstractBook } from "./AbstractBook";
import { Author } from "./Author";


export class EBook extends AbstractBook{
  private url: string;

  constructor(title: string, year: number, author: Author, url: string) {
    super(title, year, author);
    this.url = url;
  }

  getDescription(): string {
    return `EBook: "${this.title}" (${this.year}) by ${this.author.getName()}`;
  }

}
