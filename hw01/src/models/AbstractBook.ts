import { Author } from "./Author";

export abstract class AbstractBook {
  // TODO: Implement the AbstractBook class
  protected title: string;
  protected year: number;
  protected author: Author;

  constructor(title: string, year: number, author: Author) {
    this.title = title;
    this.year = year;
    this.author = author;
  }

  getTitle(): string {
    return this.title;
  }

  getYear(): number {
    return this.year;
  }
  
  abstract getDescription(): string

}

