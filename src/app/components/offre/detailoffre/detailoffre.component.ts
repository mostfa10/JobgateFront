import { Component, OnInit } from '@angular/core';
import { OffreService } from 'src/app/services/offre.service';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { CommantaireService } from 'src/app/services/commantaire.service';


@Component({
  selector: 'app-detailoffre',
  templateUrl: './detailoffre.component.html',
  styleUrls: ['./detailoffre.component.css']
})
export class DetailoffreComponent implements OnInit {
  userconnect=JSON.parse(localStorage.getItem("userconnect")!)//tjib les contenu de userconnect de localstorege enregistree lors de login

  id=this.Activeroute.snapshot.params['id']
  ofre:any
  formE!:FormGroup
  submitted:boolean=false;

  constructor(private offre:OffreService,private commantaire:CommantaireService  ,private Activeroute:ActivatedRoute,private formB:FormBuilder
    ) { }

  ngOnInit(): void {
    this.offrebyid();
    this.formE= this.formB.group(
      {
        contenu:  ['', Validators.required]})
  }
  offrebyid(){
    this.offre.getoffreyid(this.id).subscribe((res:any)=>{
      this.ofre=res["data"]
      console.log(" offre",this.offre)
    })
}
onSubmit(): void {
  this.submitted = true;

  if (this.formE.invalid) {
    return;
   }
   this.commantaire.createcomm(this.formE.value[this.id]).subscribe((res:any)=>{
    console.log(this.formE.value)
    Swal.fire('your commantaire was added ')
    console.log('res',res)
    

  })

  console.log(JSON.stringify(this.formE.value, null, 2));
}

}

