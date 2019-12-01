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
    //Trae todos los usuarios(en la practica no seria utilizado)
    getUsers(){
      return this.http.get<Users[]>(`${this.domain}/api/users`)
      .pipe(map(res => res));
    }
    //Trae la informacion de un usuario segun el usuario.
    authUser(user){
      return this.http.get<Users>(`${this.domain}/api/users/${user}`)
      .pipe(map(res => res));
    }
    //Añade un usuario nuevo a la bd.
    addUser(newUser: Users) {
      return this.http.post<Users>(`${this.domain}/api/users`, newUser)
      .pipe(map(res => res));
    }
   
}
