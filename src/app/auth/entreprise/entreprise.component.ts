import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-entreprise',
  templateUrl: './entreprise.component.html',
  styleUrls: ['./entreprise.component.css']
})
export class EntrepriseComponent implements OnInit {

  formE!:FormGroup
  fileToUpload: Array<File> = [];
  submitted=false

  constructor(private login:LoginService,private formB:FormBuilder,private route:Router) { }
  //creation new user ki na3ml sign up

  ngOnInit(): void {
     
    this.formE= this.formB.group(
      {
        fullname:  ['', Validators.required],
        description:  ['', Validators.required],
        password:  ['', [Validators.required,Validators.minLength(6)]],
        email:  ['', Validators.required],
        confirmPassword:  ['', Validators.required],
        adress:  ['', Validators.required],
        speciality:  ['', Validators.required],
        acceptTerms: [false]
      })
  }



  // handleFileInput(files: any) {
  //   this.fileToUpload = <Array<File>>files.target.files;
  //   console.log(this.fileToUpload);
  // }// bsh ndaakhlou image f cote front 

  get f(): { [key: string]: AbstractControl } {
    return this.formE.controls;
  } //ta3ml control ala les champs

  onSubmit(): void {
    this.submitted = true;

    if (this.formE.invalid) {
      return;
     }
    let formdata=new FormData()
    formdata.append('fullname',this.formE.value.fullname)
    formdata.append('description',this.formE.value.description)
    formdata.append('password',this.formE.value.password)
    formdata.append('email',this.formE.value.email)
    formdata.append('adress',this.formE.value.adress)
    
 formdata.append('speciality',this.formE.value.speciality)
 
 this.login.createentreprise(this.formE.value).subscribe((res:any)=>{
      console.log(this.formE.value)
      Swal.fire('you are  added like employer')
      console.log('res',res)
      this.route.navigateByUrl('/CreateOffre')
  
    })

    console.log(JSON.stringify(this.formE.value, null, 2));
  }

  onReset(): void {
    this.submitted = false;
    this.formE.reset();
  }

  // addUser(){
  
  //   let formdata=new formdata()
  //   formdata.append('name',this.form.value.name)
  //   formdata.append('lastname',this.form.value.username)
  //   formdata.append('password',this.form.value.password)
  //   formdata.append('email',this.form.value.email)
   

   
    
  //   this.login.signup(formdata).subscribe((res:any)=>{
  //     Swal.fire('user added')
  //     console.log('res',res)

  //   })


  // }
}
