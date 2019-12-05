import { Component } from '@angular/core';
import { FormControl} from '@angular/forms';
import {Validators} from '@angular/forms';
import { HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';

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
  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
    let currentUrl = this.router.url;
  }
  

}

