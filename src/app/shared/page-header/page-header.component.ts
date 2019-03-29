import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Breadcrumb } from './page-header.model';
import { MenuService } from 'src/app/core/menu/menu.service';
import { Menu } from 'src/app/core/menu/menu.model';

@Component({
  selector: 'page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.less']
})
export class PageHeaderComponent implements OnInit {
  breadcrumbs: Breadcrumb[] = [{
    title: '首页',
    link: '/',
    icon: 'home'
  }];

  constructor(
    private menuService: MenuService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getBreadcrumbByUrl(this.router.url);
  }

  getBreadcrumbByUrl(url: string) {
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
        findItem = menu;
        return true;
      }
      if (menu.children && this.fooSelectedAndOpenMenu(url, menu.children)) {
        findItem = menu;
      }
    });
    if (findItem) {
      this.breadcrumbs.splice(1, 0, {
        title: findItem.title,
        link: this.breadcrumbs.length == 1 ? undefined : findItem.url,
        icon: findItem.icon
      });
    }
    return findItem;
  }
}
