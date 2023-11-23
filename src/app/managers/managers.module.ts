import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManagersRoutingModule } from './managers-routing.module';
import { ManagersComponent } from './managers.component';
import { ManagerAddComponent } from './manager-add/manager-add.component';
import { ManagerViewComponent } from './manager-view/manager-view.component';
import { ManagerApproveAddComponent } from './manager-approve-add/manager-approve-add.component';


@NgModule({
  declarations: [ManagersComponent, ManagerAddComponent, ManagerViewComponent, ManagerApproveAddComponent],
  imports: [
    CommonModule,
    ManagersRoutingModule
  ]
})
export class ManagersModule { }
