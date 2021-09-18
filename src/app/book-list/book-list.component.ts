import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { AppState } from '../app.state';
import { bookEntityItemsSelector, bookEntitySelector } from '../state/book/book-entity.reducer';
import { BookVM } from '../state/book/book.vm';
import { fetchByIdSelector } from '../state/router/router.reducer';

@Component({
    selector: 'app-book-list',
    templateUrl: './book-list.component.html',
    styleUrls: ['./book-list.component.scss']
})
export class BookListComponent {
    @Input() books: ReadonlyArray<BookVM | undefined> | null = [];
    @Output() add = new EventEmitter();

    public currentSelectedBook$: Observable<BookVM | undefined>;

    constructor(
        private router: Router,
        private store: Store<AppState>
    ) {
        this.currentSelectedBook$ = this.store.pipe(select(fetchByIdSelector));
        this.store.pipe(select(bookEntitySelector)).subscribe(response => {
            console.log(response);
        });
    }

    navigate(book: BookVM | undefined): void {
        this.router.navigate([`/${book?.id}`]);
    }
}
