import { RouterReducerState } from '@ngrx/router-store';
import { BookEntityState } from './state/book/book-entity.reducer';

import { BookVM } from './state/book/book.vm';
import { CounterState } from './state/counter/counter.reducer';
import { RouterStateUrl } from './state/router/custom-route.serializer';

export interface AppState {
    counter: CounterState,
    books: ReadonlyArray<BookVM>,
    booksE: BookEntityState,
    collections: ReadonlyArray<string>,
    router: RouterReducerState<RouterStateUrl>
}
