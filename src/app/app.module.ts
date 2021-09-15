import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ActionReducer, StoreModule } from '@ngrx/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyCounterComponent } from './my-counter/my-counter.component';
import { bookReducer } from './state/book/book.reducer';
import { collectionReducer } from './state/collection/collection.reducer';
import { counterReducer } from './state/counter/counter.reducer';
import { BookCollectionComponent } from './book-collection/book-collection.component';
import { BookListComponent } from './book-list/book-list.component';
import { HttpClientModule } from '@angular/common/http';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { BookEffects } from './state/book/book.effects';
import { MinimalRouterStateSerializer, routerReducer, StoreRouterConnectingModule } from '@ngrx/router-store';

export function debug(reducer: ActionReducer<any>): ActionReducer<any> {
    return function (state, action) {
        console.log('state: ', state);
        console.log('action: ', action);
        return reducer(state, action);
    }
}
export const metaReducers = [debug];
@NgModule({
    declarations: [
        AppComponent,
        MyCounterComponent,
        BookListComponent,
        BookCollectionComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        StoreModule.forRoot({
            count: counterReducer,
            books: bookReducer,
            collections: collectionReducer,
            router: routerReducer
        }, {
            runtimeChecks: {
                strictStateImmutability: true,
                strictActionImmutability: true,
                strictStateSerializability: true,
                strictActionSerializability: true,
                strictActionWithinNgZone: true,
                strictActionTypeUniqueness: true,
            },
        }),
        HttpClientModule,
        StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production, autoPause: true }),
        EffectsModule.forRoot([
            BookEffects
        ]),
        StoreRouterConnectingModule.forRoot()
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
