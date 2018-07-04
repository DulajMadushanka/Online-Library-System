import { Pipe, PipeTransform } from '@angular/core';
import { Book } from '../services/book';
import { BookService } from '../services/book.service';

@Pipe({
  name: 'addBook'
})
export class AddBookPipe implements PipeTransform {

  transform(book: Book[], searchText: any): Book[] {
    if (searchText === undefined) {
      return book;
    }
    // tslint:disable-next-line:no-shadowed-variable
    return book.filter(function(books) {
      return books.book_name.toLowerCase().includes(searchText.toLowerCase());
    });
  }


}
