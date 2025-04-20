import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private _HttpClient:HttpClient) { }

    getUsers(page: number = 1, size: number = 5): Observable<any> {
        return this._HttpClient.get(`admin/users?page=${page}&size=${size}`);
    }
    getUserById(id: string) {
      return this._HttpClient.get(`admin/users/${id}`);
    }
}
