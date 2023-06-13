import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './component/about/about.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListeOffreComponent } from './offre/liste-offre/liste-offre.component';
import { ContactComponent } from './component/contact/contact.component';
import { DetailoffreComponent } from './offre/detailoffre/detailoffre.component';
import { CondidatComponent } from './condidat/condidat.component';
import { EntrepriseComponent } from './entreprise/entreprise.component';



@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    LoginComponent,
    RegisterComponent,
    ListeOffreComponent,
    ContactComponent,
    DetailoffreComponent,
    CondidatComponent,
    EntrepriseComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    HttpClientModule,
    RouterModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
