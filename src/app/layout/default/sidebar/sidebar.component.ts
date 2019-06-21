import { Component, OnInit, NgZone } from '@angular/core';
import { SettingsService } from 'src/app/core/settings/settings.service';
import { Router, NavigationEnd } from '@angular/router';
import { takeUntil, filter } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { MenuService } from 'src/app/services/core/menu/menu.service';
import { MenuInfo } from 'src/app/services/core/menu/models/menu-info';
import { LayoutInfo } from 'src/app/core/settings/models/layout-info';

@Component({
  selector: 'layout-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent implements OnInit {
  menus: MenuInfo[];
  layout: LayoutInfo;
  private unsubscribe$ = new Subject<void>();

  constructor(
    settingsService: SettingsService,
    private menuService: MenuService,
    private ngZone: NgZone,
    private router: Router
  ) {
    this.menus = menuService.getMenus();
    this.layout = settingsService.getLayout();
  }

  ngOnInit() {
    this.openedByUrl(this.router.url);

    this.router.events
      .pipe(
        takeUntil(this.unsubscribe$),
        filter(e => e instanceof NavigationEnd)
      )
      .subscribe((e: NavigationEnd) => {
        this.openedByUrl(e.urlAfterRedirects);
      });
  }

  navigateTo(menu: MenuInfo) {
    if (!menu.disabled && menu.url) {
      this.ngZone.run(() => this.router.navigateByUrl(menu.url));
    }
  }

  openedByUrl(url: string) {
    const resetItems: MenuInfo[] = [];
    let findItem: MenuInfo;
    while (url) {
      this.menuService.visit(this.menus, menu => {
        if (menu._selected || menu._open) {
          resetItems.push(menu);
        }
        if (menu.url && menu.url === url) {
          findItem = menu;
        }
      });
      if (findItem) {
        break;
      }
      url = url
        .split('/')
        .slice(0, -1)
        .join('/');
    }

    if (findItem) {
      resetItems.forEach(resetItem => {
        resetItem._selected = false;
        resetItem._open = false;
      });

      while (findItem) {
        if (findItem.children && !this.layout.collapsed) {
          findItem._open = true;
        } else {
          findItem._selected = true;
        }
        findItem = findItem._parent;
      }
    }
  }

  openMenu(id: string) {
    this.menuService.visit(this.menus, menu => {
      if (menu._open && menu.id !== id) {
        menu._open = false;
      }
    });
  }
}
