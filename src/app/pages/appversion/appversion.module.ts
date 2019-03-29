import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppVersionRoutingModule } from './appversion-routing.module';

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    SharedModule,
    AppVersionRoutingModule
  ]
})
export class AppVersionModule { }
