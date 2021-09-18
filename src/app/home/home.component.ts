import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../app.state';
import { addBook, fetchAllBooks, removeBook } from '../state/book/book.action';
import { selectBookCollection, selectBooksSelector } from '../state/book/book.selector';
import { BookVM } from '../state/book/book.vm';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    books$: Observable<ReadonlyArray<BookVM | undefined>> = this.store.pipe(select(selectBooksSelector));
    bookCollection$: Observable<ReadonlyArray<BookVM | undefined>> = this.store.pipe(select(selectBookCollection));

    onAdd(bookId: string) {
        this.store.dispatch(addBook({ bookId }));
    }

    onRemove(bookId: string) {
        this.store.dispatch(removeBook({ bookId }));
    }

    constructor(
        private store: Store<AppState>
    ) { }

    ngOnInit() {
        this.store.dispatch(fetchAllBooks());
    }
}
