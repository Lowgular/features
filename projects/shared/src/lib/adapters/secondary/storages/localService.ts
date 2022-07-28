import { Injectable, InjectionToken } from '@angular/core';

export const LOCAL_SERVICE = new InjectionToken<LocalService>('LOCAL_SERVICE');

@Injectable({
  providedIn: 'root',
})
export class LocalService {
  public saveData(key: string, value: string) {
    localStorage.setItem(key, value);
  }

  public getData(key: string) {
    return localStorage.getItem(key);
  }

  public clearData() {
    localStorage.clear();
  }
}
