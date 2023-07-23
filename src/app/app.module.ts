import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { CoreModule } from './core/core.module';
import { ComponentsModule } from './components/components.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthModule } from './auth/auth.module';
import { RecherchePipe } from './recherche/recherche.pipe';
import { LoginService } from './services/login.service';
import { Ng5SliderModule } from 'ng5-slider';



@NgModule({
  declarations: [
    AppComponent,
    RecherchePipe
 
  ],
  imports: [
    Ng5SliderModule,
    
    BrowserModule,
    AppRoutingModule, 
    CommonModule,
    CoreModule,
    HttpClientModule,    
    AuthModule,
    FormsModule,
    ReactiveFormsModule,
    
  ],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
