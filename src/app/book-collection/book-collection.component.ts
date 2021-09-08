import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BookVM } from '../state/book/book.vm';

@Component({
    selector: 'app-book-collection',
    templateUrl: './book-collection.component.html',
    styleUrls: ['./book-collection.component.scss']
})
export class BookCollectionComponent implements OnInit {

    @Input() books: ReadonlyArray<BookVM | undefined> | null = [];
    @Output() remove = new EventEmitter();
    constructor() { }

    ngOnInit(): void {
    }

}
