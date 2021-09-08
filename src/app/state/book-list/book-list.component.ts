import { Component, EventEmitter, Input, Output } from "@angular/core";
import { BookVM } from "../book/book.vm";

@Component({
    selector: 'app-book-list',
    templateUrl: './book-list.component.html',
    styleUrls: ['./book-list.component.scss']
})
export class BookListComponent {
    @Input() books: ReadonlyArray<BookVM | undefined> | null = [];
    @Output() add = new EventEmitter();
}
