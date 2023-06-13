import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


import Swal from 'sweetalert2';

import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  form!: FormGroup;
  date=new Date().toISOString().split('T')[0].toString()
  userconnect=JSON.parse(localStorage.getItem("userconnect")!)//tjib les contenu de userconnect de localstorege enregistree lors de login
  submitted=false

  constructor(private login:LoginService, private formBuilder:FormBuilder) {}


  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      contenu: ['', Validators.required],  
      date_envoyee:  ['',Validators.required]
    });
  }

  onSubmit(): void {
    this.submitted = true;
    
    if (this.form.valid) {
      let formdata=new FormData()
      formdata.append('name',this.form.value.name)
      formdata.append('contenu',this.form.value.contenu)
      formdata.append('email',this.form.value.email)
      formdata.append('date_envoyee',this.form.value.date_envoyee)
      };
      

      // Envoyer le message au serveur
      this.login.saveMessage(this.form.value).subscribe((res:any)=>{
        Swal.fire('message added')
        console.log('res',res)
        
    
      })
  
      console.log(JSON.stringify(this.form.value, null, 2));
    }
  }

