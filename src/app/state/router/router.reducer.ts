import { RouterReducerState } from '@ngrx/router-store';
import { createSelector } from '@ngrx/store';
import { AppState } from 'src/app/app.state';

import { selectBooksSelector } from '../book/book.selector';
import { BookVM } from '../book/book.vm';
import { RouterStateUrl } from './custom-route.serializer';

export const routeParamsSelector = createSelector(
    (state: AppState) => state.router,
    (router: RouterReducerState<RouterStateUrl>) => router?.state
);
export const fetchByIdSelector = createSelector(
    routeParamsSelector,
    selectBooksSelector,
    (routerState: RouterStateUrl, books: ReadonlyArray<BookVM>) => {
        return books.find(book => book.id === routerState.params.id);
    }
)
