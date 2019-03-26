import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { SettingsNotify, User } from './settings.model';

export const USER = 'user';

@Injectable({ providedIn: 'root' })
export class SettingsService {
  private notify$ = new Subject<SettingsNotify>();
  private _user: User = null;

  private get(key: string) {
    return JSON.parse(localStorage.getItem(key) || 'null') || null;
  }

  private set(key: string, value: any) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  get user(): User {
    if (!this._user) {
      this._user = { ...this.get(USER) };
      this.set(USER, this._user);
    }
    return this._user;
  }

  get notify(): Observable<SettingsNotify> {
    return this.notify$.asObservable();
  }

  setUser(value: User) {
    this._user = value;
    this.set(USER, value);
    this.notify$.next({ type: 'user', value });
    return true;
  }
}