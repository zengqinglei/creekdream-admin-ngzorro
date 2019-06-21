import { Injectable, OnDestroy } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { share } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class ResourceService implements OnDestroy {
  private url = 'assets/data/resources.json';
  private data: string[] = [];
  private change$ = new BehaviorSubject<string[]>([]);

  constructor(private http: HttpClient) {}

  get change(): Observable<string[]> {
    return this.change$.pipe(share());
  }

  setResources(items: string[]) {
    this.data = items;
    this.change$.next(this.data);
  }

  /** 加载拥有的资源权限码 */
  async load(userId: string) {
    return this.http
      .get<string[]>(this.url, {
        params: { userId }
      })
      .subscribe(data => {
        this.setResources(data);
      });
  }

  ngOnDestroy() {
    this.change$.unsubscribe();
  }
}
