import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MessageCenterRoutingModule } from './messagecenter-routing.module';

@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    SharedModule,
    MessageCenterRoutingModule
  ]
})
export class MessageCenterModule { }
