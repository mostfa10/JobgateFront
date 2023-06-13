import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { InterfaceComponent } from './interface/interface.component';

@NgModule({
  declarations: [
    RegisterComponent,
    LoginComponent,
    InterfaceComponent,
   
   
   
  ],
  imports: [
    CommonModule
  ],
  exports:[
    RegisterComponent,
    LoginComponent

  ]

})
export class AuthModule { }
