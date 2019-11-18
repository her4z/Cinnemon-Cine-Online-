import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { IconComponent } from './components/buttons/icon/icon.component';
import {MatInputModule} from '@angular/material'
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material';
import { LoginComponent } from './login/login.component';
import {AppRoutingModule} from './app-routing.module';
import { CreateAccountComponent } from './create-account/create-account.component';
import { SearchComponent } from './search/search.component';
import {MatCardModule, MatCard} from '@angular/material/card'
import {MatSelectModule} from '@angular/material/select';
import {MatOptionModule} from '@angular/material';
import {MatFormFieldModule} from '@angular/material/form-field';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material';
import { SelectedMovieComponent } from './selected-movie/selected-movie.component';
import {MatToolbarModule} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import {TasksService } from './tasks.service';
import { TestRestAPIComponent } from './test-rest-api/test-rest-api.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    IconComponent,
    LoginComponent,
    CreateAccountComponent,
    SearchComponent,
    SelectedMovieComponent,
    TestRestAPIComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    AppRoutingModule,
    MatSelectModule,
    MatFormFieldModule,
    MatCardModule,
    MatIconModule,
    MatOptionModule,
    MatToolbarModule,
    FlexLayoutModule,
    HttpClientModule,
  ],
  providers: [TasksService],
  bootstrap: [AppComponent]
})
export class AppModule { }
