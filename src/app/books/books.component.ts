import { Component, OnInit } from '@angular/core';
import { Book } from '../model/book/book';
import { BooksService } from '../shared/books.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  books:Book[];
  Onebook:Book;
  constructor(private bookService:BooksService) { 
    this.bookService.GetAllBooks().subscribe(books=>{
      console.log(books)
      this.books = books
      console.log(this.books)
    })
    bookService.getBookById().subscribe(response=>{
      console.log(response);
      this.Onebook = response
    })

    
  }
  
  ngOnInit(): void {
  }

}
