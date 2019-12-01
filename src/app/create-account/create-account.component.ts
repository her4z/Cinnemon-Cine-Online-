import { Component, OnInit } from '@angular/core';
import { Users } from '../Users';
import { UsersService} from '../users.service';


@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {
  users: Users[];
  user: string;
  pass: string;

  constructor( private userService: UsersService) { 
    this.userService.getUsers()
    .subscribe(users =>{
      this.users = users
    })
  }

  ngOnInit() {
  }
  
  addUser(event) {
    event.preventDefault();
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
  }

}
