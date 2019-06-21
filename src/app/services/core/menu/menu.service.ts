import { Injectable } from '@angular/core';
import { MenuInfo } from './models/menu-info';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class MenuService {
  private menus: MenuInfo[] = [];

  constructor(private http: HttpClient) {}

  getMenus() {
    return this.menus;
  }

  visit(
    data: MenuInfo[],
    callback: (menu: MenuInfo, parentMenu: MenuInfo, level?: number) => void
  ) {
    const inFn = (menus: MenuInfo[], parentMenu: MenuInfo, level: number) => {
      menus.forEach(menu => {
        if (callback) {
          callback(menu, parentMenu, level);
        }
        if (menu.children) {
          inFn(menu.children, menu, level + 1);
        }
      });
    };
    inFn(data, null, 1);
  }

  setMenus(items: MenuInfo[]) {
    this.visit(items, (menu, parentMenu, level) => {
      if (!menu._level) {
        menu._level = level;
      }
      if (!menu._parent) {
        menu._parent = parentMenu;
      }
    });
    this.menus = items;
  }

  /** 加载用户所拥有的菜单 */
  async load(userId: string) {
    const url = 'assets/data/menus.json';
    return this.http
      .get<MenuInfo[]>(url, {
        params: { userId }
      })
      .subscribe(data => {
        this.setMenus(data);
      });
  }
}
