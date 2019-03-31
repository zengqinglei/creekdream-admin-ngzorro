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
    let findItem: Menu;
    while (url) {
      this.menuService.visit(this.menuService.menus, menu => {
        if (menu.url && menu.url === url) {
          findItem = menu;
        }
      });
      if (findItem) {
        break;
      }
      url = url.split('/').slice(0, -1).join('/');
    }

    while (findItem) {
      this.breadcrumbs.splice(1, 0, {
        title: findItem.title,
        link: this.breadcrumbs.length === 1 ? undefined : findItem.url,
        icon: findItem.icon
      });
      findItem = findItem._parent;
    }
  }
}
