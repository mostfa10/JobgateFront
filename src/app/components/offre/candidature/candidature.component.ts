import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-candidature',
  templateUrl: './candidature.component.html',
  styleUrls: ['./candidature.component.css']
})
export class CandidatureComponent implements OnInit {
  userconnect=JSON.parse(localStorage.getItem("userconnect")!)//tjib les contenu de userconnect de localstorege enregistree lors de login


  constructor() { }

  ngOnInit(): void {
  }

}
