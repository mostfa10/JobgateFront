import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';
import { ContratService } from 'src/app/services/contrat.service';
import { OffreService } from 'src/app/services/offre.service';
import { PlaceService } from 'src/app/services/place.service';
import { SkilsService } from 'src/app/services/skils.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-ajout-offre',
  templateUrl: './ajout-offre.component.html',
  styleUrls: ['./ajout-offre.component.css']
})
export class AjoutOffreComponent implements OnInit {
  form!:FormGroup
  categories:any;
  contrats:any;
  places:any
  skils:any
  userconnect=JSON.parse(localStorage.getItem("userconnect")!)//tjib les contenu de userconnect de localstorege enregistree lors de login
  
  
    constructor(private formB:FormBuilder,private category:CategoryService,private place:PlaceService,
      private offre:OffreService,private router:Router,private contrat:ContratService,private skil:SkilsService) { }
  
    ngOnInit(): void {
      this.form = this.formB.group(
        {
          titre: ['', Validators.required],
          description:  ['', Validators.required],
          categoryId:  ['', Validators.required],
          datef:  ['', Validators.required],
        
  
  
  
          schoollevel:  ['', Validators.required],
          skilsId:  ['', Validators.required],
          placeId:  ['', Validators.required],
          numberP:  ['', Validators.required],
          contratId:  ['', Validators.required],
          entreprsieId:['', Validators.required]
  
  
  
  
  
  
  
        })
  
        this.listecategorie()
        this.listecontrats()
        this.listeplace()
        this.listskils()
    }
  
    listecategorie(){
      this.category.allCategory().subscribe((res:any)=>{
        this.categories=res["data"]
        console.log("listes sub",this.categories)
  
    })
    
  
  }
  listskils(){
    this.skil.allskils().subscribe((res:any)=>{
      this.skils=res["data"]
      console.log("listes skils",this.skils)
  
  })
  
  
  }
  
  listeplace(){
    this.place.allPlace().subscribe((res:any)=>{
      this.places=res["data"]
      console.log("listes sub",this.places)
  
  })
  
  
  }
  listecontrats(){
    this.contrat.allcontrat().subscribe((res:any)=>{
      this.contrats=res["data"]
      console.log("listes sub",this.contrats)
  
  })
  
  
  }
  createoffre(){
    this.offre.createOffre(this.form.value).subscribe((res:any)=>{
     
      console.log("offre added",res)
    Swal.fire('offre added')
  
    })
    this.router.navigateByUrl('/CreateOffre')//traj3k l liste
  }
  }
