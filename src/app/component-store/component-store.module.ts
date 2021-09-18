import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentStoreRoutingModule } from './component-store-routing.module';
import { ComponentStoreComponent } from './component-store.component';


@NgModule({
  declarations: [
    ComponentStoreComponent
  ],
  imports: [
    CommonModule,
    ComponentStoreRoutingModule
  ]
})
export class ComponentStoreModule { }
