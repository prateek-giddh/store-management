import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { catchError, exhaustMap, map } from 'rxjs/operators';
import { BooksService } from 'src/app/service/books.service';
import { fetchAllBooks } from './book.action';

import { BookActions, BookVM } from './book.vm';

@Injectable({
    providedIn: 'root'
})
export class BookEffects {
    constructor(
        private actions$: Actions,
        private booksService: BooksService
    ) {

    }

    loadBooks$ = createEffect(() => this.actions$.pipe(
        ofType(fetchAllBooks),
        exhaustMap(() => this.booksService.getBooks()
            .pipe(
                map(
                    (books: BookVM[]) => ({ type: BookActions.RetrieveBooks, data: books })
                ),
                catchError(() => EMPTY)
            )
        ))
    );
}
