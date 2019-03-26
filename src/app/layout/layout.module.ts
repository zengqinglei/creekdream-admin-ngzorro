import { NgModule } from '@angular/core';
import { LayoutDefaultComponent } from './default/default.component';
import { SharedModule } from '../shared/shared.module';
import { HeaderComponent } from './default/header/header.component';
import { SidebarComponent } from './default/sidebar/sidebar.component';

@NgModule({
  declarations: [LayoutDefaultComponent, HeaderComponent, SidebarComponent],
  imports: [
    SharedModule
  ],
  exports: [LayoutDefaultComponent]
})
export class LayoutModule { }
