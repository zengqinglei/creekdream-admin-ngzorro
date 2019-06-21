import { Injectable } from '@angular/core';
import { SettingsService } from '../settings/settings.service';
import { MenuService } from 'src/app/services/core/menu/menu.service';
import { ResourceService } from 'src/app/services/core/resource/resource.service';
import { AppInfo } from '../settings/models/app-info';
import { UserInfo } from '../auth/models/user-info';
import { AuthService } from '../auth/auth.service';

@Injectable({ providedIn: 'root' })
export class StartupService {
  private currentUser: UserInfo;

  constructor(
    private menuService: MenuService,
    private resourceService: ResourceService,
    private settingsService: SettingsService,
    private authService: AuthService
  ) {}

  async load() {
    const app: AppInfo = {
      name: '后台管理',
      description: '统一后台管理中心'
    };
    const user: UserInfo = {
      id: '1',
      userName: 'zengql',
      email: 'zengql@live.cn'
    };

    this.authService.currentUser.subscribe(x => (this.currentUser = x));
    this.settingsService.setApp(app);
    await this.menuService.load(user.id);
    await this.resourceService.load(user.id);
  }
}
