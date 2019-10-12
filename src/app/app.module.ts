import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { IconComponent } from './components/buttons/icon/icon.component';
import {MatInputModule} from '@angular/material'
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material';
import { ROUTING } from './app-routing.module';
import { HomeComponent } from './app/home/home.component'
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    IconComponent,
    HomeComponent,  
    RouterModule  
  ],
  imports: [
    BrowserModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    ROUTING
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
