import { Component } from '@angular/core';
import { FormControl} from '@angular/forms';
import {Validators} from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Cinnemon';
  bodyFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  showit2: boolean = false;
  it2picked(){
    this.showit2 = true;
  }
  

}

