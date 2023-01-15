import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { ListUsersComponent } from './list-users/list-users.component';
import { LoginComponent } from './login/login.component';
import { ProfilComponent } from './profil/profil.component';
import { LoginGuard } from './shared/login.guard';

const routes: Routes = [
  { path : "", component : HomepageComponent},
  { path : "login", component : LoginComponent},
  { path : "profil", canActivate : [LoginGuard], component : ProfilComponent},
  { path : "listUsers", canActivate : [LoginGuard], component : ListUsersComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
