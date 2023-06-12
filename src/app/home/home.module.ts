import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from '../component/header/header.component';
import { LayoutComponent } from '../component/layout/layout.component';
import { FooterComponent } from '../component/footer/footer.component';
import { ContactComponent } from '../component/contact/contact.component';
import { ListeOffreComponent } from '../offre/liste-offre/liste-offre.component';



@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    LayoutComponent,
    FooterComponent,
    
   
   
  ],
  imports: [
    HomeRoutingModule,
    HttpClientModule,
    FormsModule,
    CommonModule,
    HomeRoutingModule,
    CommonModule
  ]
})
export class HomeModule { }
