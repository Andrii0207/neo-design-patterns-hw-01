import { Copy } from "./Copy";

export class Reader {
  private id: string;
  private customerName: string;
  private borrowedList: Copy[] = [];

  constructor(id: string, customerName: string) {
    this.id = id;
    this.customerName = customerName;
  }

  getCustomerName(): string {
    return this.customerName;
  }

  getBorrowCopy(copy: Copy): Copy | null {
    const index = this.borrowedList.indexOf(copy);
    if (index === -1) {
      console.error(`Copy not found in borrowed list: ${copy.getBook().getTitle()}`);
      return null;
    }
    return copy;
  }

  getBorrowedList(): Copy[] {
    return [...this.borrowedList];
  }

  setBorrowCopy(copy: Copy): void {
    this.borrowedList.push(copy);
  }

  borrowedListAfterReturnBook(copy: Copy): Copy[] {
    this.borrowedList = this.borrowedList.filter(c => c !== copy);
    return this.borrowedList;
  }
} 
