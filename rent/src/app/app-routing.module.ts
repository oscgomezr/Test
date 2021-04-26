import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login/login.component';
import { HomeComponent } from './toDo/components/home/home.component';


const routes: Routes = [
  {path:'Login', component: LoginComponent},
  {path:'Home', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
