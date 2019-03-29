import { NgModule } from '@angular/core';
import { LayoutDefaultComponent } from './default/default.component';
import { SharedModule } from '../shared/shared.module';
import { HeaderComponent } from './default/header/header.component';
import { SidebarComponent } from './default/sidebar/sidebar.component';
import { LayoutFullScreenComponent } from './fullscreen/fullscreen.component';

@NgModule({
  declarations: [LayoutDefaultComponent, HeaderComponent, SidebarComponent, LayoutFullScreenComponent],
  imports: [
    SharedModule
  ],
  exports: [LayoutDefaultComponent]
})
export class LayoutModule { }
