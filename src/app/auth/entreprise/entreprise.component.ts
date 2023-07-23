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
        image:  ['', Validators.required],
        speciality:  ['', Validators.required],
        acceptTerms: [false]
      })
  }

  get f(): { [key: string]: AbstractControl } {
    return this.formE.controls;
  } //ta3ml control ala les champs
  

  onFileChange(event: any): void {
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      this.formE.patchValue({
        image:file,
      });
    }
  } 

  onSubmit(): void {
    if (this.formE.invalid) {
      return;
     }
    let formdata=new FormData()
    formdata.append('fullname',this.formE.value.fullname)
    formdata.append('description',this.formE.value.description)
    formdata.append('password',this.formE.value.password)
    formdata.append('email',this.formE.value.email)
    formdata.append('image',this.formE.get('image')?.value)
    formdata.append('adress',this.formE.value.adress)
    formdata.append('speciality',this.formE.value.speciality)
 
    this.login.createentreprise(formdata).subscribe((res:any)=>{
        this.submitted = true;
        this.route.navigateByUrl('/login')
    })
  }

  onReset(): void {
    this.submitted = false;
    this.formE.reset();
  }
}
