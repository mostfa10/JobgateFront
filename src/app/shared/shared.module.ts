import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OfferCardComponent } from './offer-card/offer-card.component';
import { TopsearchComponent } from './topsearch/topsearch.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    OfferCardComponent,
    TopsearchComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule
  ],
  exports: [
    OfferCardComponent,
    TopsearchComponent
  ]
})
export class SharedModule { }
