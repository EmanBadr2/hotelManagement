import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IChangePassword } from '../interface/change-password';

@Injectable({
  providedIn: 'root',
})
export class ChangePasswordService {
  constructor(private _httpClient: HttpClient) {}
  changePassword(data: IChangePassword): Observable<IChangePassword> {
    return this._httpClient.post<IChangePassword>(
      `admin/users/change-password`,
      data
    );
  }
}
