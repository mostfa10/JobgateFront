import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {
  userconnect=JSON.parse(localStorage.getItem("userconnect")!)//tjib les contenu de userconnect de localstorege enregistree lors de login


  constructor() { }

  ngOnInit(): void {
  }

}
