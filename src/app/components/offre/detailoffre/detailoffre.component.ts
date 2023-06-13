import { Component, OnInit } from '@angular/core';
import { OffreService } from 'src/app/services/offre.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-detailoffre',
  templateUrl: './detailoffre.component.html',
  styleUrls: ['./detailoffre.component.css']
})
export class DetailoffreComponent implements OnInit {
  id=this.Activeroute.snapshot.params['id']
  ofre:any


  constructor(private offre:OffreService,private Activeroute:ActivatedRoute) { }

  ngOnInit(): void {
    this.offrebyid();
  }
  offrebyid(){
    this.offre.getoffreyid(this.id).subscribe((res:any)=>{
      this.ofre=res["data"]
      console.log(" offre",this.offre)
    })
}
}

