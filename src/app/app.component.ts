import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppService } from './app.service';
import { Book, Quote } from './quote.interface';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})


export class AppComponent {
  title = 'QuotaQuote';

  quote?: Quote | null ;
  testBook = {
    id: 4,
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    year: 1951,
    isRead: true
  }

  books = [
    { id: 1, title: "1984", author: "George Orwell", year: 1949, isRead: false },
    { id: 2, title: "Brave New World", author: "Aldous Huxley", year: 1932, isRead: true },
    { id: 3, title: "Fahrenheit 451", author: "Ray Bradbury", year: 1953, isRead: false }
  ];
  

  constructor(private quoteService: AppService) {}

  ngOnInit() {
    this.fetchQuote();
  }

  fetchQuote() {
    this.quoteService.getQuoteOfTheDay().subscribe(
      (data) => {
        this.quote = data;
      },
      (error) => {
        console.error('Error fetching quote of the day:', error);
      }
    );
  }


  addBook(book: Book) {
    console.log("Array: ", this.books)
    console.log('Adding book:', book);
    this.books.push(book);
  }

  deleteBook(book: Book | number) {
    console.log('Removing book:', book);

    if(typeof book === 'number') {
      this.books = this.books.filter((b) => b.id !== book);
    }
    else {
      this.books = this.books.filter((b) => b.id !== book.id);
    }
    console.log("Array: ", this.books)
  }

  markAsRead(book: Book | string) {
    console.log('Marking book as read:', book);

    if(typeof book === 'string') {
      const foundBooks = this.books.filter((b) => b.title === book);
      if (foundBooks.length === 0) {
        console.error('No books found by title:', book);
      } else {
        foundBooks.forEach((b) => (b.isRead = true));
        console.log("Marked as read: ", foundBooks);
      }
    }
    else {
      this.books.filter((b) => b.title === book.title);
      console.log("Marked as read: ", this.books)
    }
  } 
  
  getBookByAuthor(book: Book | string) {
    console.log('Getting book by author:', book);

    if(typeof book === 'string') {
      const foundBooks = this.books.filter((b) => b.author === book);
      if (foundBooks.length === 0) {
        console.error('No books found by author:', book);
      } else {
        console.log("Found books: ", foundBooks);
      }
    }
    else {
      this.books.filter((b) => b.author === book.author);
      console.log("Founded book: ", this.books)
    }
  }

  getUnreadBooks(){
    const unreadBooks = this.books.filter((b) => b.isRead === false);
    console.log("Unread books: ", unreadBooks)
  }
}
