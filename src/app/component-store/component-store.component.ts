import { Component, OnInit } from '@angular/core';
import { select } from '@ngrx/store';
import { BooksStoreService } from './books-store.service';

@Component({
    selector: 'app-component-store',
    templateUrl: './component-store.component.html',
    styleUrls: ['./component-store.component.scss'],
    providers: [BooksStoreService]
})
export class ComponentStoreComponent implements OnInit {

    readonly books$ = this.booksStoreService.booksCollection$;

    constructor(
        private booksStoreService: BooksStoreService
    ) {
        this.booksStoreService.loadBooks({});
    }

    ngOnInit(): void {
        this.booksStoreService.addBooks({
            id: 'pmpmppmpm',
            volumeInfo: {
                title: "Prateek Mishra",
                authors: ["Patrick"]
            }
        });
    }

}
