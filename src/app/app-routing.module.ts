import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { PersonaldetailsComponent } from './personaldetails/personaldetails.component';



const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'login', component: UserloginComponent},
  {path: 'userdetails', component: UserdetailsComponent},
  {path: 'personaldetails', component: PersonaldetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
