import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterUserComponent } from './register-user/register-user.component';
import { LoginUserComponent } from './login-user/login-user.component';
import { HomeComponent } from './home/home.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UpdateComponent } from './update/update.component';
import { DeleteComponent } from './delete/delete.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { CanActivateGuard } from './can-activate.guard';
import { LoginactivateGuard } from './loginactivate.guard';
import { LoginDataGuard } from './login-data.guard';

const routes: Routes = [
  { path:"register",component:RegisterUserComponent,canActivate:[LoginactivateGuard]},
{path:"login",component:LoginUserComponent,canActivate:[LoginDataGuard]},
{path:"home",component:HomeComponent,canActivate:[CanActivateGuard]},
{path:"userlist",component:UserListComponent,canActivate:[CanActivateGuard],
children:[
  {path:"delete",component:DeleteComponent,canActivate:[CanActivateGuard]}
]},
{path:"userdetails",component:UserDetailsComponent,canActivate:[CanActivateGuard]},
{path:"adduser",component:UpdateComponent,canActivate:[CanActivateGuard]},
{ path:"",redirectTo:"/login",pathMatch:"full"},
{path:"**",component:PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
