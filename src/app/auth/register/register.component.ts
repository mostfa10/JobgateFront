import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form!:FormGroup
  fileToUpload: Array<File> = [];
  submitted=false

  constructor(private login:LoginService,private formB:FormBuilder,private route:Router) { }
  //creation new user ki na3ml sign up

  ngOnInit(): void {
     
    this.form = this.formB.group(
      {
        name:  ['', Validators.required],
        lastname:  ['', Validators.required],
        password:  ['', [Validators.required,Validators.minLength(6)]],
        email:  ['', Validators.required,Validators.email],
        confirmPassword:  ['', Validators.required],
        acceptTerms: [false],
        condidatTerms:[false],
        entrepriseTerms:[false]

        


      })
  }



  // handleFileInput(files: any) {
  //   this.fileToUpload = <Array<File>>files.target.files;
  //   console.log(this.fileToUpload);
  // }// bsh ndaakhlou image f cote front 

  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }//ta3ml control ala les champs

  onSubmit(): void {
    this.submitted = true;

    // if (this.form.invalid) {
    //   return;
    //  }
    let formdata=new FormData()
    formdata.append('name',this.form.value.name)
    formdata.append('lastname',this.form.value.lastname)
    formdata.append('password',this.form.value.password)
    formdata.append('email',this.form.value.email)
    


   
    
    this.login.signup(this.form.value).subscribe((res:any)=>{
      Swal.fire('user added')
      console.log('res',res)
      this.route.navigateByUrl('/')
  
    })

    console.log(JSON.stringify(this.form.value, null, 2));
  }

  onReset(): void {
    this.submitted = false;
    this.form.reset();
  }

  addUser(){
  
    let formdata=new FormData()
    formdata.append('name',this.form.value.name)
    formdata.append('lastname',this.form.value.username)
    formdata.append('password',this.form.value.password)
    formdata.append('email',this.form.value.email)
    formdata.append('email',this.form.value.email)

   
    
    this.login.signup(formdata).subscribe((res:any)=>{
      Swal.fire('user added')
      console.log('res',res)

    })


  }
}
