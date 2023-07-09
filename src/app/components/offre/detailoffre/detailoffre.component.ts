import { Component, OnInit } from '@angular/core';
import { OffreService } from 'src/app/services/offre.service';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { CommantaireService } from 'src/app/services/commantaire.service';
import { CondidatureService } from 'src/app/services/condidature.service';


@Component({
  selector: 'app-detailoffre',
  templateUrl: './detailoffre.component.html',
  styleUrls: ['./detailoffre.component.css']
})
export class DetailoffreComponent implements OnInit {
  userconnect=JSON.parse(localStorage.getItem("userconnect")!) //tjib les contenu de userconnect de localstorege enregistree lors de login
 id=this.Activeroute.snapshot.params['id']
  ofre:any 
  formE!:FormGroup
  submitted:boolean=false;
  form!:FormGroup

  constructor(private offre:OffreService, private condidature:CondidatureService,
    private commantaire:CommantaireService  ,private Activeroute:ActivatedRoute,private formB:FormBuilder
    ) { }

  ngOnInit(): void {
          this.offrebyid();
          this.formE= this.formB.group(
            {
              
          contenu:  ['', Validators.required]}
          )

          this.form= this.formB.group(
            {
              name:  ['', Validators.required],
              email:  ['', Validators.required],
             cv:['',Validators.required],
              userId:  ['', Validators.required],
              status:  ['', Validators.required],
              offreId:  ['', Validators.required],
              Motivation:  ['', Validators.required],

              veridied: [false]
            })
      

  }
    onFileChange(event: any): void {
      if (event.target.files && event.target.files.length > 0) {
        const file = event.target.files[0];
        this.form.patchValue({
          cv: file,
        });
      }
  }  
      offrebyid(){
        this.offre.getoffreyid(this.id).subscribe((res:any)=>{
          this.ofre=res["data"]
          console.log(" offre",this.ofre)
        })
}

  

onPostuler(): void {
  this.submitted = true;

  const formData = new FormData();
  formData.append('offreId', this.ofre._id);
  formData.append('name', this.form.value.name);
  formData.append('cv', this.form.value.cv);
  formData.append('email', this.form.value.email);
  formData.append('Motivation', this.form.value.Motivation);
  formData.append('userId', this.userconnect.user._id);

  this.condidature.createcondidature(formData).subscribe((res: any) => {
    Swal.fire('Your candidature was added');
    console.log('res', res);
  });
}





onSubmit(): void {
  this.submitted = true;

  if (this.formE.invalid) {
    return;
   }
   
   
   const contenu=this.formE.value.contenu;
   
   const commentaire={
    
    offreId:this.ofre._id,
    contenu:contenu,
    userId:this.userconnect.user._id
   }
   this.commantaire.createcomm(commentaire).subscribe((res:any)=>{
    console.log(this.formE.value)
    Swal.fire('your commantaire was added ')
    console.log('res',res)
    

  })

  console.log(JSON.stringify(this.formE.value, null, 2));
}

}

