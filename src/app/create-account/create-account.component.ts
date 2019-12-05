import { Component, OnInit } from '@angular/core';
import { Users } from '../Users';
import { UsersService} from '../users.service';
import { error } from '@angular/compiler/src/util';
import { Router, RouterLink } from '@angular/router';


@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {
  users: Users[];
  user: string;
  pass: string;

  constructor( private userService: UsersService, public router: Router) { 
    this.userService.getUsers()
    .subscribe(users =>{
      this.users = users
    })
  }

  ngOnInit() {
  }
  
  addUser(event) {
    event.preventDefault();
    if(this.user == "" || this.pass == ""){
      alert("Contraseña y/o usuario incorrecto.");
      return;

    };
    const newUser: Users = {
      user: this.user,
      pass: this.pass
    };
    this.userService.addUser(newUser)
    .subscribe(user => {
      this.users.push(user);
      this.user = "";
      this.pass = "";
    })
    this.router.navigate(['/search']);
  }

}
