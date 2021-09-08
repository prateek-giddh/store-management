export interface BookVM {
    id: string;
    volumeInfo: {
        title: string;
        authors: Array<string>;
    }
}
export enum BookActions {
    AddBook = '[Book list] Add Book',
    RemoveBook = '[Book collection] Remove Book',
    RetrieveBooks = '[Book list/API] Retrieve Books Success',
}
