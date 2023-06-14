import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form!:FormGroup
  

  constructor(private login:LoginService,private formB:FormBuilder,private route:Router) { }

  ngOnInit(): void {
    this.form = this.formB.group(
      {
      
        email:  ['', Validators.required],
        password:  ['', Validators.required],
      })
    
  }


  signi(){
    this.login.signin(this.form.value).subscribe((res:any)=>{
      console.log("user",res)
      Swal.fire('you are welcome') // ki 3malna login sajilna f localstoraje kol shy
      localStorage.setItem('userconnect',JSON.stringify(res)) //yraja3 user kol f string ki ta3ml signin 
      localStorage.setItem('accesstoken',res.tokens.accessToken)
      localStorage.setItem('refreshtoken',res.tokens.refreshtoken)
      localStorage.setItem('state','0') //ki yabda connecte ya3ti 0 ki ma yabdesh connecte ya3ti 1 nest3mlouha f guarde
       this.route.navigateByUrl('/offre')
     
    })

  }
}

