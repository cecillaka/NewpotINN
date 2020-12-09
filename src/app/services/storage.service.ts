import { Injectable } from '@angular/core';
import { Plugins } from '@capacitor/core';
const { Storage } = Plugins;
const TOKEN_KEY = 'AuthToken';
@Injectable({
  providedIn: 'root'
})
export class StorageService {
  constructor() {}

  // Store the value
  async store(storageKey: string, value: any) {
    const encryptedValue = btoa(escape(JSON.stringify(value)));
    await Storage.set({
      key: storageKey,
      value: encryptedValue
    });
  }

  // Get the value
  async get(storageKey: string) {
    const ret = await Storage.get({ key: storageKey });
    if (ret.value) {
      return JSON.parse(unescape(atob(ret.value)));
    } else {
      return false;
    }
  }

  // JSON "get" example
  async getObject() {
    const ret = await Storage.get({ key: 'user' });
    const user = JSON.parse(ret.value);
  }

  async setItem() {
    await Storage.set({
      key: 'name',
      value: 'Max'
    });
  }
// function for storing token test101

  public getToken(): string {
    return sessionStorage.getItem(TOKEN_KEY);
  }
// ------------------------------------
  async keys() {
    const keys = await Storage.keys();
    console.log('Got keys: ', keys);
  }

  async clear() {
    await Storage.clear();
  }
}
