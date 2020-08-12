import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormUsuarioComponent } from './pages/form-usuario/form-usuario.component';
import { PageHomeComponent } from './pages/page-home/page-home.component';
import { LoginComponent } from './pages/login/login.component';


const routes: Routes = [
  {
    path:"", redirectTo:"/home", pathMatch:"full"
  },
  {
    path:"home",
    component: PageHomeComponent
  },
  {
    path:"addUser",
    component: FormUsuarioComponent
  },
  {
    path:"formUser/:key",
    component: FormUsuarioComponent
  },
  {
    path:"login",
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
