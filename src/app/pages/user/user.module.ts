import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { UserRoutingModule } from './user-routing.module';
import { LoginComponent } from './account/login/login.component';

@NgModule({
  declarations: [LoginComponent],
  imports: [SharedModule, UserRoutingModule]
})
export class UserModule {}
