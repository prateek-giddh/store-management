import { createReducer, on } from "@ngrx/store";
import { retrieveBooks } from "./book.action";
import { BookVM } from "./book.vm";

const initialBookState: ReadonlyArray<BookVM> = [];

export const bookReducer = createReducer(
    initialBookState,
    on(retrieveBooks, (state: ReadonlyArray<BookVM>, props: {data: BookVM[]}) => [...props.data])
)
