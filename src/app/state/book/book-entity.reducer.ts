import { createEntityAdapter, EntityAdapter, EntityState } from "@ngrx/entity";
import { createFeatureSelector, createReducer, createSelector, on } from "@ngrx/store";
import { retrieveBooks } from "./book.action";
import { BookVM } from "./book.vm";

export interface BookEntityState extends EntityState<BookVM> {
}
export const bookEntityAdapter: EntityAdapter<BookVM> = createEntityAdapter<BookVM>({
    selectId: (book: BookVM) => book.id
});

const initialBookEntityState: BookEntityState = bookEntityAdapter.getInitialState();

export const bookEntityReducer = createReducer(
    initialBookEntityState,
    on(retrieveBooks, (state: BookEntityState, props: {data: BookVM[]}) => {
        return bookEntityAdapter.setMany(props.data, state);
    })
);

const {
    selectEntities,
    selectAll
} = bookEntityAdapter.getSelectors();

export const bookEntitySelector = createFeatureSelector<BookEntityState>('booksE');
// Can also be done as:
// export const bookEntitySelector = createSelector(
//     (state: AppState) => state.booksE,
//     (booksE: BookEntityState) => booksE
// );
export const bookEntityItemsSelector = createSelector(
    bookEntitySelector,
    selectEntities
)
