import { Component, OnInit, HostListener, OnDestroy } from '@angular/core';
import { SettingsService } from 'src/app/core/settings/settings.service';
import { NzModalService } from 'ng-zorro-antd';
import * as screenfull from 'screenfull';
import { LayoutInfo } from 'src/app/core/settings/models/layout-info';
import { AppInfo } from 'src/app/core/settings/models/app-info';
import { UserInfo } from 'src/app/core/auth/models/user-info';
import { AuthService } from 'src/app/core/auth/auth.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'layout-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit, OnDestroy {
  isSuppourtFullscreen: boolean = screenfull && screenfull.enabled;
  isFullscreen: boolean;
  layout: LayoutInfo;
  app: AppInfo;
  user: UserInfo;
  currentUserSubscription: Subscription;

  constructor(
    private settingsService: SettingsService,
    private modalService: NzModalService,
    private authService: AuthService,
    private router: Router
  ) {
    this.layout = this.settingsService.getLayout();
    this.app = this.settingsService.getApp();
    this.currentUserSubscription = this.authService.currentUser.subscribe(
      user => {
        this.user = user;
      }
    );
  }

  @HostListener('window:resize')
  _resize() {
    if (screenfull && screenfull.enabled) {
      this.isFullscreen = screenfull.isFullscreen;
    }
  }

  ngOnInit() {}

  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.currentUserSubscription.unsubscribe();
  }

  toggleCollapsedSidebar() {
    this.settingsService.setLayout('collapsed', !this.layout.collapsed);
  }

  toggleFullscreen() {
    if (screenfull && screenfull.enabled) {
      screenfull.toggle();
    }
  }

  clearLocalStorage() {
    this.modalService.confirm({
      nzTitle: '<i>确认操作</i>',
      nzContent: '<b>是否清除本地缓存?</b>',
      nzOnOk: () => localStorage.clear()
    });
  }

  logout() {
    this.modalService.confirm({
      nzTitle: '<i>确认操作</i>',
      nzContent: '<b>是否退出登录?</b>',
      nzOnOk: () => {
        this.authService.logout();
        this.router.navigate(['/user/account/login']);
        console.log('logout successed.');
      }
    });
  }
}
