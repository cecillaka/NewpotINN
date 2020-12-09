import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  headers = new HttpHeaders();
  options = { headers: this.headers, withCredintials: false };

  constructor(private http: HttpClient) {}

  post(serviceName: string, data: any) {
    // const url = environment.apiUrl + serviceName //JSON.stringify(data);
    const url = 'http://127.0.0.1:8000/api/auth/' + serviceName;
    return this.http.post(url, data, this.options);
  }

  // test function
  postimage( data: any) {
    // const url = environment.apiUrl + serviceName //JSON.stringify(data);
    const url = 'http://127.0.0.1:8000/api/file/images';
    return this.http.post(url, JSON.stringify(data), this.options);
  }


}
