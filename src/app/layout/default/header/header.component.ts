import { Component, OnInit, HostListener } from '@angular/core';
import { SettingsService } from 'src/app/core/settings/settings.service';
import { NzModalService } from 'ng-zorro-antd';
import screenfull from 'screenfull';

@Component({
  selector: 'layout-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {
  isSuppourtFullscreen: boolean = screenfull && screenfull.enabled;
  isFullscreen: boolean;

  constructor(
    private settingsService: SettingsService,
    private modalService: NzModalService) {

  }

  @HostListener('window:resize')
  _resize() {
    if (screenfull && screenfull.enabled) {
      this.isFullscreen = screenfull.isFullscreen;
    }
  }

  ngOnInit() { }

  toggleCollapsedSidebar() {
    this.settingsService.setLayout('collapsed', !this.settingsService.layout.collapsed);
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
      nzOnOk: () => console.log('logout successed.')
    });
  }
}
