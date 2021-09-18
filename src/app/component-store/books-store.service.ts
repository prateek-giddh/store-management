import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { EMPTY, Observable } from 'rxjs';
import { catchError, switchMap, tap } from 'rxjs/operators';
import { BooksService } from '../service/books.service';

import { BookVM } from '../state/book/book.vm';

export interface BooksState {
    books: BookVM[]
}

@Injectable({
    providedIn: 'any'
})
export class BooksStoreService extends ComponentStore<BooksState> {

    constructor(
        private booksService: BooksService
    ) {
        super({
            books: []
        });
    }

    readonly booksCollection$: Observable<BookVM[]> = this.select(state => state.books);

    readonly addBooks = this.updater((state: BooksState, book: BookVM | BookVM[]) => {
        let books = [];
        if (!Array.isArray(book)) {
            books = [book];
        } else {
            books = book;
        }
        return {
            books: [
                ...state.books,
                ...books
            ]
        };
    });

    readonly loadBooks = this.effect((requestObj$: Observable<any>) => {
        return requestObj$.pipe(
            switchMap(() => this.booksService.getBooks()),
            tap({
                next: (response => this.addBooks(response)),
            }),
            catchError(error => EMPTY)
        )
    })
}
