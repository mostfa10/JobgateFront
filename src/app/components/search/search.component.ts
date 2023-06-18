import { Component, OnInit } from '@angular/core';
import { OffreService } from 'src/app/services/offre.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  public searchterm : string='';
  public searchobject : string='';


  constructor(private offre:OffreService) { }

  ngOnInit(): void {
  }
  
  search(event:any){
    this.searchterm=(event.target as HTMLInputElement).value; 
    this.offre.search.next(this.searchterm);
    console.log(this.searchterm)
  }
 
}
