import { NgModule } from '@angular/core';
import { LayoutDefaultComponent } from '../layout/default/default.component';
import { Routes, RouterModule } from '@angular/router';
import { LayoutFullScreenComponent } from '../layout/fullscreen/fullscreen.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutDefaultComponent,
    children: [
      { path: '', redirectTo: 'messagecenter', pathMatch: 'full' },
      { path: 'messagecenter', loadChildren: './messagecenter/messagecenter.module#MessageCenterModule' },
      { path: 'appversion', loadChildren: './appversion/appversion.module#AppVersionModule' },
      { path: 'exception', loadChildren: './exception/exception.module#ExceptionModule' }
    ]
  },
  {
    path: 'fullscreen',
    component: LayoutFullScreenComponent,
    children: []
  },
  { path: '**', redirectTo: 'exception/404' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
