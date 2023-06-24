import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { InterfaceComponent } from './interface/interface.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AuthRoutingModule } from './auth-routing.module';
import { CondidatComponent } from './condidat/condidat.component';
import { EntrepriseComponent } from './entreprise/entreprise.component';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';




@NgModule({
  declarations: [
  
    RegisterComponent,
    LoginComponent,
    InterfaceComponent,
    CondidatComponent,
    EntrepriseComponent,
    ForgetpasswordComponent
  ],
  imports: [
  
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AuthRoutingModule,
    RouterModule
  ],
  exports:[
    RegisterComponent,
    LoginComponent
  ]

})
export class AuthModule { }
