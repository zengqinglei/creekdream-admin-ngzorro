import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { RouterModule } from '@angular/router';
import { PageHeaderComponent } from './page-header/page-header.component';

@NgModule({
  declarations: [
    PageHeaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    NgZorroAntdModule
  ],
  exports: [
    CommonModule,
    RouterModule,
    NgZorroAntdModule,
    PageHeaderComponent
  ]
})
export class SharedModule { }
