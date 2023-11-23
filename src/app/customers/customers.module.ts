import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersRoutingModule } from './customers-routing.module';
import { CustomersComponent } from './customers.component';
import { CustomerAddComponent } from './customer-add/customer-add.component';


@NgModule({
  declarations: [, CustomerAddComponent],
  imports: [
    CommonModule,
    CustomersRoutingModule,
    CustomersComponent
  ]
})
export class CustomersModule { }
