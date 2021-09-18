import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponentStoreComponent } from './component-store.component';

const routes: Routes = [{ path: '', component: ComponentStoreComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentStoreRoutingModule { }
