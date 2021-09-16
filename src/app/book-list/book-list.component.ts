import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { AppState } from "../app.state";
import { BookVM } from "../state/book/book.vm";
import { selectQueryParam, selectRouteParams } from "../state/router/router.reducer";

@Component({
    selector: 'app-book-list',
    templateUrl: './book-list.component.html',
    styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {
    @Input() books: ReadonlyArray<BookVM | undefined> | null = [];
    @Output() add = new EventEmitter();

    constructor(
        private router: Router,
        private store: Store<AppState>
    ) {}

    navigate(book: BookVM | undefined): void {
        console.log('Book selected: ', book);
        this.router.navigate([`/${book?.id}`]);
    }

    ngOnInit(): void {
        this.store.select(selectRouteParams).subscribe(response => console.log("My response: ",response));
    }
}
