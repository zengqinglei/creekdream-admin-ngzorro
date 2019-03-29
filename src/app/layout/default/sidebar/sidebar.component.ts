import { Component, OnInit, NgZone, Input } from '@angular/core';
import { SettingsService } from 'src/app/core/settings/settings.service';
import { MenuService } from 'src/app/core/menu/menu.service';
import { Menu } from 'src/app/core/menu/menu.model';
import { Router } from '@angular/router';
import { InputBoolean } from 'ng-zorro-antd';

@Component({
  selector: 'layout-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent implements OnInit {
  @Input() @InputBoolean() recursivePath = true;

  constructor(
    private settingsService: SettingsService,
    private menuService: MenuService,
    private ngZone: NgZone,
    private router: Router) { }

  ngOnInit() {
    this.openedByUrl(this.router.url);
  }

  navigateTo(menu: Menu) {
    if (!menu.disabled && menu.url) {
      this.ngZone.run(() => this.router.navigateByUrl(menu.url));
    }
  }

  openedByUrl(url: string) {
    while (url) {
      if (this.fooSelectedAndOpenMenu(url, this.menuService.menus)) {
        break;
      }
      url = url.split('/').slice(0, -1).join('/');
    }
  }

  fooSelectedAndOpenMenu(url: string, menus: Menu[]): Menu {
    let findItem: Menu;
    menus.forEach(menu => {
      if (menu.url && menu.url === url) {
        menu.selected = true;
        findItem = menu;
        return true;
      }
      if (menu.children) {
        findItem = this.fooSelectedAndOpenMenu(url, menu.children);
        if (findItem && !menu.open) {
          menu.open = true;
          this.openMenu(menu.id, menus);
        }
      }
    });
    return findItem;
  }

  openMenu(id: string, menus: Menu[]): void {
    menus.forEach(menu => {
      if (menu.id != id) {
        menu.open = false;
      }
    });
  }
}
