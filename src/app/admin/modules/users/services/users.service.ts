import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private _HttpClient:HttpClient) { }

    getUsres(): Observable<any> {
        return this._HttpClient.get(`admin/users`);
    }
    getUserById(id: string) {
      return this._HttpClient.get(`admin/users/${id}`);
    }
}
