import { NgModule } from '@angular/core';
import { CondidatComponent } from './condidat/condidat.component';
import { InterfaceComponent } from './interface/interface.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RouterModule, Routes } from '@angular/router';
import { EntrepriseComponent } from './entreprise/entreprise.component';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';

const routes: Routes = [
  {path:"login",component:LoginComponent},
  {path:"register",component:RegisterComponent},
  {path:"condidat",component:CondidatComponent},
  {path:"entreprise",component:EntrepriseComponent},
  {path:"inscription",component:InterfaceComponent},
  {path:"forget",component:ForgetpasswordComponent}

];
@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]

})
export class AuthRoutingModule { }
