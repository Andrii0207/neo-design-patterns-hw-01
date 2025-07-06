import { Reader } from "../models/Reader";
import { Copy } from "../models/Copy";

export class BorrowService {

  borrow(reader: Reader, copy: Copy): boolean {
    if(!copy.isCopyAvailable()) {
      console.log(`The book "${copy.getBook().getTitle()}" is not available for borrowing.`);
      return false;
    } 
    copy.setAvailability(false);
    reader.setBorrowCopy(copy);
    console.log(`Reader ${reader.getCustomerName()} borrowed the book "${copy.getBook().getTitle()}".`);
    return true;
  }

  returnBook(reader: Reader, copy: Copy): void {
    if (!reader.getBorrowCopy(copy)) {
      console.log(`Reader ${reader.getCustomerName()} has not borrowed the book "${copy.getBook().getTitle()}".`);
      return;
    }
    copy.setAvailability(true);
    reader.borrowedListAfterReturnBook(copy);
    console.log(`Reader ${reader.getCustomerName()} returned the book "${copy.getBook().getTitle()}".`);
    }
}
