import { createReducer, on } from "@ngrx/store";
import { addBook, removeBook } from "../book/book.action";

export const initialCollectionState: ReadonlyArray<string> = [];
export const collectionReducer = createReducer(
    initialCollectionState,
    on(addBook, (state, {bookId}) => {
        if (state.indexOf(bookId) > -1) return state;
        return [...state, bookId];
    }),
    on(removeBook, (state, {bookId}) => state.filter(book => book !== bookId))
)
