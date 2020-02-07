import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { UserMainComponent } from './components/user-main.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
  LoginComponent,
  RegisterComponent,
  UserMainComponent
],
  imports: [
    BrowserModule,
    SharedModule,
    FormsModule
  ],
  providers: []
})

export class UserModule { }
