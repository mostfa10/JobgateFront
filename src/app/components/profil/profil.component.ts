import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { SkilsService } from 'src/app/services/skils.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {
  userconnect=JSON.parse(localStorage.getItem("userconnect")!)//tjib les contenu de userconnect de localstorege enregistree lors de login
  id!:any;
  user!:any
  isProfileEdible : boolean = false
  editMode:string = "none";

  skills!:any
  languages : any = [
    'Arabe' ,'Français' , 'Anglais' ,  'Allmand' ,'Espangol'
  ]
  LanguageLevels : any =  [
    'Native','Excellent','Bien','Elementaire'
  ]
  skillsLevels : any = ['Avancé(e)','Moyen(ne)','Débutant(e)']
  studyLevels : any = ['Master','Bachelor','HighSchool']
  workModes : any = ['temps-plein', 'temps-partielle', 'à distance', 'freelance']
  selectedStudy !: any
  selectedStudyIdx:number = 0

  selectedExperience !:any
  selectedExpIdx:number = 0

  imgChanged:boolean = false
  constructor(
    private route: ActivatedRoute, 
    private skillsService: SkilsService,
    private userService: UserService,
  ) {
   }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.id = params.get("id");
      this.getUserById()
      this.isProfileEdible = this.id == this.userconnect.user._id
    });
    this.getSkills()
  }

  getUserById(){
    this.userService.getUserById(this.id).subscribe((res:any) =>{
      this.user = res.data.condidatId
    })
  }

  saveProfileDetails(name:string){
    if(name == 'basics'){
      this.userService.updateProfile(this.user._id,this.user).subscribe((res:any) =>{
        // this.user = res.data
      })
    }else {
      this.userService.updateProfile(this.user._id,{[name]:this.user[name]}).subscribe((res:any) =>{
        // this.user = res.data
      })
    }
  }
  
  getSkills(){
    this.skillsService.allskils().subscribe(
      (res:any) => {
        this.skills = res.data.map((skill : any) => {return skill.name})
      }
    )
  }

  addProfileData(name:string){
    this.user[name].push(
      {name : null , level : null}
    )
  }

  deleteProfileData(name:string,idx:number) {
    this.user[name].splice(idx, 1)
    if(name == 'studies') {
      this.saveProfileDetails('studies')
    }
  }

  getNames(attribut:string){
    return this.user[attribut].map((el:any) => {return el.name}).join(', ')
  }

  filteredSelectList(list:any,name:string,attribut:string='name'){
    let userlist = this.user[name].map((e:any) => {return e[attribut]})
    return list.filter((el:any) => {return !userlist.includes(el) } )
  }

  addStudy(){
    let study = {
      instituteName:null,
      country:null,
      level:null,
      department:null,
      start_date:null,
      end_date:null
    }
    this.user.studies.push(study)
    this.selectedStudyIdx = this.user.studies - 1;
    this.selectedStudy = study;
    this.editMode = 'education'
  }

  saveStudy(){
    this.user.studies[this.selectedStudyIdx] = this.selectedStudy
    this.userService.updateProfile(this.user._id,{studies:this.user.studies}).subscribe((res:any) =>{
      // this.user = res.data
    })
  }

  addExp(){
    let experience = {
      title:null,
      company:null,
      country:null,
      mode:null,
      description:null,
      start_date:null,
      end_date:null
    }
    this.user.experiences.push(experience)
    this.selectedExpIdx = this.user.experiences - 1;
    this.selectedExperience = experience;
    this.editMode = 'experiences'
  }

  
  saveExp(){
    this.user.experiences[this.selectedExpIdx] = this.selectedExperience
    this.userService.updateProfile(this.user._id,{experiences:this.user.experiences}).subscribe((res:any) =>{
      // this.user = res.data
    })
  }

  changeImg(){
    document.getElementById("profile-pic")?.click()
  }

  onImgChange(event: any): void {
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      console.log(file)
      this.user.image = file
      this.imgChanged =true
    }
} 
}
