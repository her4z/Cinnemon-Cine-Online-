import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { HomeComponent} from './home/home.component';
import { AppComponent } from './app.component';
export const AppRoutes: Routes = [
  {path: '', component: AppComponent},
  {path: '', component: HomeComponent}
];
export const ROUTING: ModuleWithProviders = RouterModule.forRoot(AppRoutes,);
@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class AppRoutingModule { }
