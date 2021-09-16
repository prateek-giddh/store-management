import { RouterState } from "@ngrx/router-store";
import { BookVM } from "./state/book/book.vm";
import { CounterState } from "./state/counter/counter.reducer";

export interface AppState {
    counter: CounterState,
    books: ReadonlyArray<BookVM>,
    collections: ReadonlyArray<string>,
    router: RouterState
}
