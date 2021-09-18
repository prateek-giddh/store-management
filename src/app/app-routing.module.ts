import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookListComponent } from './book-list/book-list.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
    { path: '', component: HomeComponent, pathMatch: 'full'},
    { path: 'details/:id', component: BookListComponent },
    { path: 'component-store', loadChildren: () => import('./component-store/component-store.module').then(m => m.ComponentStoreModule) }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
