import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
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
        image:  ['', Validators.required],

        acceptTerms: [false]
      })
  }
  onFileChange(event: any): void {
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      this.formD.patchValue({
        image:file,
      });
    }
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
    let formdata2=new FormData()
    formdata2.append('name',this.formD.value.name)
    formdata2.append('lastname',this.formD.value.lastname)
    formdata2.append('password',this.formD.value.password)
    formdata2.append('email',this.formD.value.email)
    formdata2.append('adress',this.formD.value.adress)
    formdata2.append('image',this.formD.get('image')?.value)
    formdata2.append('date_naissance',this.formD.value.date_naissance)

    this.login.createCondidat(formdata2).subscribe((res:any)=>{
      Swal.fire('you are  added')
      console.log('res',res)

  
    })

    console.log(JSON.stringify(this.formD.value, null, 2));
  }

  onReset(): void {
    this.submitted = false;
    this.formD.reset();
  }

  addC(){
  
    let formdata=new FormData()
    formdata.append('name',this.formD.value.name)
    formdata.append('lastname',this.formD.value.username)
    formdata.append('password',this.formD.value.password)
    formdata.append('email',this.formD.value.email)
    // formdata.append('file',this.formD.value.file)
    formdata.append('date_naissance',this.formD.value.date_naissance)


   

   
    
    this.login.createCondidat(formdata).subscribe((res:any)=>{
      Swal.fire('condidat added')
      console.log('res',res)

    })


   }
}