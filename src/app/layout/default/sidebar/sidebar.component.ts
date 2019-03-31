import { Component, OnInit, NgZone, Input } from '@angular/core';
import { SettingsService } from 'src/app/core/settings/settings.service';
import { MenuService } from 'src/app/core/menu/menu.service';
import { Menu } from 'src/app/core/menu/menu.model';
import { Router, NavigationEnd } from '@angular/router';
import { InputBoolean } from 'ng-zorro-antd';
import { takeUntil, filter } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { isNullOrUndefined } from 'util';

@Component({
  selector: 'layout-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent implements OnInit {
  @Input() @InputBoolean() recursivePath = true;
  private unsubscribe$ = new Subject<void>();

  constructor(
    public settingsService: SettingsService,
    public menuService: MenuService,
    private ngZone: NgZone,
    private router: Router) { }

  ngOnInit() {
    this.openedByUrl(this.router.url);

    this.router.events
      .pipe(
        takeUntil(this.unsubscribe$),
        filter(e => e instanceof NavigationEnd),
      )
      .subscribe((e: NavigationEnd) => {
        this.openedByUrl(e.urlAfterRedirects);
      });
  }

  navigateTo(menu: Menu) {
    if (!menu.disabled && menu.url) {
      this.ngZone.run(() => this.router.navigateByUrl(menu.url));
    }
  }

  openedByUrl(url: string) {
    const resetItems: Menu[] = [];
    let findItem: Menu;
    while (url) {
      this.menuService.visit(this.menuService.menus, menu => {
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
      url = url.split('/').slice(0, -1).join('/');
    }

    if (!findItem) {
      return;
    }

    resetItems.forEach(resetItem => {
      resetItem._selected = false;
      resetItem._open = false;
    });

    while (findItem) {
      findItem._selected = true;
      findItem._open = true;
      findItem = findItem._parent;
    }
  }

  openMenu(id: string): void {
    this.menuService.visit(this.menuService.menus, menu => {
      if (menu._open && menu.id !== id) {
        menu._open = false;
      }
    });
  }
}
