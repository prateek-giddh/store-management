import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { BookVM } from "../state/book/book.vm";

@Injectable({
    providedIn: 'root'
})
export class BooksService {
    constructor(private http: HttpClient) { }

    getBooks(): Observable<Array<BookVM>> {
        return this.http.get<{ items: Array<BookVM> }>('https://www.googleapis.com/books/v1/volumes?maxResults=5&orderBy=relevance&q=oliver%20sacks').pipe(map(books => books.items ?? []));
    }
}
