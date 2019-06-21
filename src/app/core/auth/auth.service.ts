import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { UserInfo } from './models/user-info';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private currentUserSubject: BehaviorSubject<UserInfo>;
  public currentUser: Observable<UserInfo>;

  constructor() {
    this.currentUserSubject = new BehaviorSubject<UserInfo>(
      JSON.parse(localStorage.getItem('currentUser'))
    );
    this.currentUser = this.currentUserSubject.asObservable();
  }

  get currentUserValue(): UserInfo {
    return this.currentUserSubject.value;
  }

  login(username: string, password: string) {
    // http request login
    const user: UserInfo = {
      id: new Date().getTime().toString(),
      userName: username
    };
    localStorage.setItem('currentUser', JSON.stringify(user));
    this.currentUserSubject.next(user);
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }
}
