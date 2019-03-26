import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule,
    NgZorroAntdModule
  ],
  exports: [
    CommonModule,
    RouterModule,
    NgZorroAntdModule
  ]
})
export class SharedModule { }
