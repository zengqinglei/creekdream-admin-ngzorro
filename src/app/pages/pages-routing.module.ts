import { NgModule } from '@angular/core';
import { LayoutDefaultComponent } from '../layout/default/default.component';
import { Routes, RouterModule } from '@angular/router';
import { LayoutFullScreenComponent } from '../layout/fullscreen/fullscreen.component';
import { environment } from 'src/environments/environment';
import { AuthGuard } from '../core/auth/auth.guard';

const routes: Routes = [
  {
    path: '',
    canActivate: [AuthGuard],
    component: LayoutDefaultComponent,
    children: [
      {
        path: '',
        redirectTo: 'messagecenter',
        pathMatch: 'full'
      },
      {
        path: 'messagecenter',
        loadChildren: () => import('./messagecenter/messagecenter.module').then(m => m.MessageCenterModule)
      },
      {
        path: 'appversion',
        loadChildren: () => import('./appversion/appversion.module').then(m => m.AppVersionModule)
      },
      {
        path: 'exception',
        loadChildren: () => import('./exception/exception.module').then(m => m.ExceptionModule)
      }
    ]
  },
  {
    path: 'fullscreen',
    component: LayoutFullScreenComponent,
    children: []
  },
  {
    path: 'user',
    loadChildren: './user/user.module#UserModule'
  },
  { path: '**', redirectTo: 'exception/404' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: environment.useHash })],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
