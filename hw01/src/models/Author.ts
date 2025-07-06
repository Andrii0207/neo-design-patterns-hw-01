export class Author {
  private name: string;
  private booklist: string[] = [];
  
  constructor(name: string) {
    this.name = name;
  }

  getName(): string {
    return this.name;
  }

  addBook(book: string): void {
    this.booklist.push(book);
  }

  getBooks(): string[] {
    return this.booklist;
  }
}
