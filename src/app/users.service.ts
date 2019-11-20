import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Users } from './Users';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  domain: string = "http://localhost:3000"

  constructor(private http: HttpClient) {}
    getUsers(){
      return this.http.get<Users[]>(`${this.domain}/api/users`)
      .pipe(map(res => res));
    }
    addUser(newUser: Users) {
      return this.http.post<Users>(`${this.domain}/api/users`, newUser)
      .pipe(map(res => res));
    }
   
}
