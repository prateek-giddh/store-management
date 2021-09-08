import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AppState } from "src/app/app.state";
import { BookVM } from "./book.vm";

export const selectBooksSelector = createSelector(
    (state: AppState) => state.books,
    (books: ReadonlyArray<BookVM>) => books
);

export const selectCollectionSelector = createFeatureSelector<AppState, ReadonlyArray<string>>('collections');

export const selectBookCollection = createSelector(
    selectBooksSelector,
    selectCollectionSelector,
    (books: ReadonlyArray<BookVM>, collection: ReadonlyArray<string>) => {
        return collection.map(id => books.find(book => book.id === id));
    }
)
