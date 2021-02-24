import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { UserInfoComponent } from './user-info/user-info.component';



@NgModule({
  declarations: [LoginComponent, UserInfoComponent],
  imports: [
    CommonModule
  ]
})
export class LoginModule { }
