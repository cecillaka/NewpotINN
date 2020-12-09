import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StorageService } from './storage.service';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
export interface ApiImage {
  _id: string;
  name: string;
  createdAt: Date;
  url: string;
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  url = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getImages() {
    return this.http.get<ApiImage[]>(`${this.url}/image`);
  }

  uploadImage(blobData, name, ext) {
    const formData = new FormData();
    formData.append('file', blobData, `myimage.${ext}`);
    formData.append('name', name);

    return this.http.post(`${this.url}/image`, formData);
  }

  // test function

  imageUpload1(postData: any): Observable<any> {

    return this.http.post('http://127.0.0.1:8000/api/file/images', postData, httpOptions );
  }

  uploadImageFile(file: File) {
    const ext = file.name.split('.').pop();
    const formData = new FormData();
    formData.append('file', file, `myimage.${ext}`);
    formData.append('name', file.name);

    return this.http.post('http://127.0.0.1:8000/api/file/images', formData);
  }

  deleteImage(id) {
    return this.http.delete(`${this.url}/image/${id}`);
  }
}