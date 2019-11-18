import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule, RoutesRecognized} from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { SearchComponent } from './search/search.component';
import { SelectedMovieComponent } from './selected-movie/selected-movie.component';
import { TestRestAPIComponent } from './test-rest-api/test-rest-api.component';

const routes: Routes = [
  {path:'', redirectTo: '/login', pathMatch:'full'},
  {path:'login', component: LoginComponent},
  {path:'create-account', component: CreateAccountComponent},
  {path:'search', component: SearchComponent},
  {path:'selected-movie', component: SelectedMovieComponent},
  {path: 'test-rest-api', component: TestRestAPIComponent}
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]

})
export class AppRoutingModule { }
