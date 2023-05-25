import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccountComponent } from './account/account.component';
import { ForgotPasswordComponent } from './account/forgot-password/forgot-password.component';
import { LoginComponent } from './account/login/login.component';
import { RegisterComponent } from './account/register/register.component';


@NgModule({
  declarations: [
    AppComponent,
    AccountComponent,
    ForgotPasswordComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }