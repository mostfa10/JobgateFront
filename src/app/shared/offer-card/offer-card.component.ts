import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OffreService } from 'src/app/services/offre.service';

@Component({
  selector: 'app-offer-card',
  templateUrl: './offer-card.component.html',
  styleUrls: ['./offer-card.component.css']
})
export class OfferCardComponent implements OnInit {

  @Input() offer!: any
  constructor() { }

  ngOnInit(): void {
  }
}