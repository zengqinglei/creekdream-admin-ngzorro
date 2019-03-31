import { Injectable, OnDestroy } from '@angular/core';
import { Menu } from './menu.model';
import { Observable, BehaviorSubject } from 'rxjs';
import { share } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class MenuService implements OnDestroy {
  private data: Menu[] = [];
  private _change$: BehaviorSubject<Menu[]> = new BehaviorSubject<Menu[]>([]);

  get change(): Observable<Menu[]> {
    return this._change$.pipe(share());
  }

  get menus() {
    return this.data;
  }

  setMenus(items: Menu[]) {
    this.visit(items, (menu, parentMenu, level) => {
      if (!menu._level) {
        menu._level = level;
      }
      if (!menu._parent) {
        menu._parent = parentMenu;
      }
    });
    this.data = items;
  }

  visit(data: Menu[], callback: (menu: Menu, parentMenu: Menu, level?: number) => void) {
    const inFn = (menus: Menu[], parentMenu: Menu, level: number) => {
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

  clear() {
    this.data = [];
    this._change$.next(this.data);
  }

  ngOnDestroy(): void {
    this._change$.unsubscribe();
  }
}
