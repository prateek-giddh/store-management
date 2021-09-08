import { ChangeDetectionStrategy, Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { DECREMENT_ACTION, INCREMENT_ACTION, RESET_ACTION } from '../state/counter/counter.action';
import { CounterState } from '../state/counter/counter.reducer';

@Component({
    selector: 'app-my-counter',
    templateUrl: './my-counter.component.html',
    styleUrls: ['./my-counter.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class MyCounterComponent {

    count$: Observable<number>;

    constructor(
        private store: Store<{count: CounterState}>
    ) {
        this.count$ = this.store.pipe(select(appStore => appStore.count.counter));
    }

    increment() {
        this.store.dispatch(INCREMENT_ACTION());
    }

    decrement() {
        this.store.dispatch(DECREMENT_ACTION());
    }

    reset() {
        this.store.dispatch(RESET_ACTION());
    }

}
