import {createAction, props} from '@ngrx/store';
import { BookActions, BookVM } from './book.vm';

export const addBook = createAction(BookActions.AddBook, props<{bookId: string}>());
export const removeBook = createAction(BookActions.RemoveBook, props<{bookId: string}>());
export const retrieveBooks = createAction(BookActions.RetrieveBooks, props<{data: BookVM[]}>());
