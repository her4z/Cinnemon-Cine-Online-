import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { IconComponent } from './components/buttons/icon/icon.component';
import {MatInputModule} from '@angular/material'
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    IconComponent,    
  ],
  imports: [
    BrowserModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
