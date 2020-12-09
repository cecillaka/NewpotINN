import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { AuthConstants } from './../config/auth-constants';
import { HttpService } from './http.service';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  data$ = new BehaviorSubject<any>([]);

  constructor(
    private httpService: HttpService,
    private storageService: StorageService,
    private router: Router
  ) {}

  getUserData() {
    this.storageService.get(AuthConstants.AUTH).then(res => {
      this.data$.next(res);
    });
  }


// tests upluod picture function
// imageUpload(postData: any): Observable<any> {
//   return this.httpService.post('http://127.0.0.1:8000/api/file/images', postData);
// }
// ----------------------------------

  login(postData: any): Observable<any> {
    return this.httpService.post('login', postData);
  }

  signup(postData: any): Observable<any> {
    return this.httpService.post('signup', postData);
  }

  logout() {
    this.storageService.clear();
    this.data$.next('');
    this.router.navigate(['']);
  }
}
