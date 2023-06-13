import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-condidat',
  templateUrl: './condidat.component.html',
  styleUrls: ['./condidat.component.css']
})
export class CondidatComponent implements OnInit {
  formD!:FormGroup
  fileToUpload: Array<File> = [];
  submitted=false

  constructor(private login:LoginService,private formB:FormBuilder,private route:Router) { }
  //creation new user ki na3ml sign up

  ngOnInit(): void {
     
    this.formD= this.formB.group(
      {
        name:  ['', Validators.required],
        lastname:  ['', Validators.required],
        password:  ['', [Validators.required,Validators.minLength(6)]],
        email:  ['', Validators.required,Validators.email],
        confirmPassword:  ['', Validators.required],
        adress:  ['', Validators.required],
        date_naissance:  ['', Validators.required],



       


        acceptTerms: [false]
        

        


      })
  }



  // handleFileInput(files: any) {
  //   this.fileToUpload = <Array<File>>files.target.files;
  //   console.log(this.fileToUpload);
  // }// bsh ndaakhlou image f cote front 

  get f(): { [key: string]: AbstractControl } {
    return this.formD.controls;
  } //ta3ml control ala les champs

  onSubmit(): void {
    this.submitted = true;

    if (this.formD.invalid) {
      return;
     }
    let formdata=new FormData()
    formdata.append('name',this.formD.value.name)
    formdata.append('lastname',this.formD.value.lastname)
    formdata.append('password',this.formD.value.password)
    formdata.append('email',this.formD.value.email)
    formdata.append('adress',this.formD.value.adress)
    formdata.append('schoollevel',this.formD.value.schoollevel)

    formdata.append('biographie',this.formD.value.biographie)
    formdata.append('date_naissance',this.formD.value.date_naissance)

   



    


   
    
    this.login.createCondidat(this.formD.value).subscribe((res:any)=>{
      Swal.fire('you are  added')
      console.log('res',res)
      this.route.navigateByUrl('/')
  
    })

    console.log(JSON.stringify(this.formD.value, null, 2));
  }

  onReset(): void {
    this.submitted = false;
    this.formD.reset();
  }

  // addUser(){
  
  //   let formdata=new FormData()
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