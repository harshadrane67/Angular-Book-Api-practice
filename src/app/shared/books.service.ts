import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from '../model/book/book';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  api_url:string = environment.api_url;
  constructor(private httpClient:HttpClient) { }

  GetAllBooks():Observable<Book[]>{
    console.log(this.api_url+"GetAllBooks")
    return this.httpClient.get<Book[]>(this.api_url+"GetAllBooks");
  }

  getBookByAuthor():Observable<Book[]>{
    return this.httpClient.get<Book[]>(this.api_url+"GetBookByAUthor")
  }
  // api/books/getBookByID
  getBookById():Observable<Book>{
    return this.httpClient.get<Book>("api/books/getBookByID")
  }
}
