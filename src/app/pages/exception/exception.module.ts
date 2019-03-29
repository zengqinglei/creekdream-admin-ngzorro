import { NgModule } from '@angular/core';
import { Exception404Component } from './404/404.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ExceptionRoutingModule } from './exception-routing.module';

@NgModule({
    declarations: [
        Exception404Component
    ],
    imports: [
        SharedModule,
        ExceptionRoutingModule
    ]
})
export class ExceptionModule { }
