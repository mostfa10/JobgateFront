import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OffreModule } from './offre/offre.module';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { ComponentsRoutingModule } from './components-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { AuthModule } from '../auth/auth.module';
import { SearchComponent } from './search/search.component';
import { DernierOffreComponent } from './dernier-offre/dernier-offre.component';



@NgModule({
  declarations: [
    ContactComponent,
    AboutComponent,
    HomeComponent,
    SearchComponent,
    DernierOffreComponent
  ],
  imports: [
    ComponentsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
  ]
})
export class ComponentsModule { }
