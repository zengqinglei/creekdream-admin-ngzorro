import { Injectable } from '@angular/core';
import { MenuService } from '../menu/menu.service';
import { SettingsService } from '../settings/settings.service';
import { HttpClient } from '@angular/common/http';
import { Menu } from '../menu/menu.model';

@Injectable({ providedIn: 'root' })
export class StartupService {
  constructor(
    private menuService: MenuService,
    private settingService: SettingsService,
    private httpClient: HttpClient
  ) {

  }

  load(): Promise<any> {
    return new Promise((resolve, reject) => {

      this.settingService.setUser({
        name: 'zengql',
        email: 'zengql@live.cn'
      });

      this.httpClient.get<Menu[]>('./assets/menus.json')
        .subscribe(
          res => {
            debugger;
            this.menuService.setMenus(res);
          },
          () => { },
          () => { resolve(null) });
    });
  }
}
