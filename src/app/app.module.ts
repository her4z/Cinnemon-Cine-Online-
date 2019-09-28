import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { IconComponent } from './components/buttons/icon/icon.component';
import {MatButtonModule, MatDividerModule} from '@angular/material';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    IconComponent,
  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    MatDividerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
