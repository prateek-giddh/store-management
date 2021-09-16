import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { AppState } from '../app.state';
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
        this.currentSelectedBook$ = this.store.select(fetchByIdSelector);
    }

    navigate(book: BookVM | undefined): void {
        this.router.navigate([`/${book?.id}`]);
    }
}
