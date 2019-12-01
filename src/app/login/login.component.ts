import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { Users } from '../Users';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  users: Users[];
  user: string;
  pass: string; 

  constructor(private usersService: UsersService) { 
    this.usersService.getUsers()
    .subscribe(users => {
      this.users = users
    })
    
  }

  ngOnInit() {
  }

  loginUser(event) {
    event.preventDefault();
    const User: Users = {
      user: this.user,
      pass: this.pass
    };
    this.usersService.authUser(User.user)
    .subscribe(user => {
      if(user.user == User.user || user.pass == User.user){
        console.log("logged succesfully");
      }
    });
  }
}
