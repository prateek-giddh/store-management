import { Params } from "@angular/router";
import { getSelectors } from "@ngrx/router-store";
import { createSelector } from "@ngrx/store";
import { selectBooksSelector } from "../book/book.selector";
import { BookVM } from "../book/book.vm";

export const {
    selectCurrentRoute,
    selectFragment,
    selectQueryParams,
    selectQueryParam,
    selectRouteParams,
    selectRouteParam,
    selectRouteData,
    selectUrl
} = getSelectors();

export const fetchByIdSelector = createSelector(
    selectRouteParams,
    selectBooksSelector,
    (router: Params, books: BookVM[]) => {
        return books.find(book => book.id === router.id);
    }
)
