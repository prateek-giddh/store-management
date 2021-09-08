import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { AppState } from './app.state';
import { BooksService } from './state/book-list/books.service';
import { addBook, removeBook } from './state/book/book.action';
import { selectBooksSelector, selectBookCollection } from './state/book/book.selector';
import { retrieveBooks } from './state/book/book.action';
import { BookVM } from './state/book/book.vm';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    books$: Observable<ReadonlyArray<BookVM | undefined>> = this.store.pipe(select(selectBooksSelector));
    bookCollection$: Observable<ReadonlyArray<BookVM | undefined>> = this.store.pipe(select(selectBookCollection));

    onAdd(bookId: string) {
        this.store.dispatch(addBook({ bookId }));
    }

    onRemove(bookId: string) {
        this.store.dispatch(removeBook({ bookId }));
    }

    constructor(
        private booksService: BooksService,
        private store: Store<AppState>
    ) { }

    ngOnInit() {
        this.booksService
            .getBooks()
            .subscribe((response: BookVM[]) => {
                this.store.dispatch(retrieveBooks({ data: response }))
            });
    }
}
