import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserInfo } from '../../../core/auth/models/user-info';

@Injectable({ providedIn: 'root' })
export class AccountService {
  constructor(private http: HttpClient) {}

  /** 登录 */
  login(userName: string, password: string) {
    const url = `/account/login`;
    return this.http.post<UserInfo>(url, {
      userName,
      password
    });
  }

  /** 登出 */
  logout() {
    const url = `/account/logout`;
    return this.http.get(url);
  }
}
