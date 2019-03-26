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
    this.data = items;
  }

  clear() {
    this.data = [];
    this._change$.next(this.data);
  }

  ngOnDestroy(): void {
    this._change$.unsubscribe();
  }
}
