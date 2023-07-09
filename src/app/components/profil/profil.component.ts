import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {
  userconnect=JSON.parse(localStorage.getItem("userconnect")!)//tjib les contenu de userconnect de localstorege enregistree lors de login
  id!:any;
  user!:any
  editMode:string = "none";

  basics!:FormGroup;
  constructor(private route: ActivatedRoute, private formBuilder: FormBuilder) {

    this.basics = this.formBuilder.group(
      {
        name: [,Validators.required],
        lastname: [''],
        email: ['',Validators.required],
        date_naissance: ['',Validators.required],
        tel: ['',Validators.required],
        image:[]
      }
    )
   }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.id = params.get("id");
      // if(this.id != this.userconnect.user._id) {
      //   this.getUserById()
      // }else {
        this.user = this.userconnect.user
        console.log(this.user)
      // }
    });
  }

  getUserById(){

  }

  saveProfileDetails(){

    console.log(this.basics.value)
  }
  
}
