import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoanofficersRoutingModule } from './loanofficers-routing.module';
import { LoanofficersComponent } from './loanofficers.component';
import { LoanofficerAddComponent } from './loanofficer-add/loanofficer-add.component';
import { LoanofficerListComponent } from './loanofficer-list/loanofficer-list.component';


@NgModule({
  declarations: [LoanofficersComponent, LoanofficerAddComponent, LoanofficerListComponent],
  imports: [
    CommonModule,
    LoanofficersRoutingModule
  ]
})
export class LoanofficersModule { }
