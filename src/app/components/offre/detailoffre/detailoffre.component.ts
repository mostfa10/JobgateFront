import { Component, OnInit } from '@angular/core';
import { OffreService } from 'src/app/services/offre.service';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { CommantaireService } from 'src/app/services/commantaire.service';
import { CondidatureService } from 'src/app/services/condidature.service';
import { ReponseService } from 'src/app/services/reponse.service';


@Component({
  selector: 'app-detailoffre',
  templateUrl: './detailoffre.component.html',
  styleUrls: ['./detailoffre.component.css']
})
export class DetailoffreComponent implements OnInit {
  userconnect=JSON.parse(localStorage.getItem("userconnect")!) //tjib les contenu de userconnect de localstorege enregistree lors de login
 id=this.Activeroute.snapshot.params['id']
  ofre:any 
  rep!:any[];
  formE!:FormGroup
  submitted:boolean=false;
  form!:FormGroup
  formR!:FormGroup
  filteredResponses: any[] = [];

  selectedCandidate!:any;
  showReplyInput: boolean[] = []; // Array to store whether the reply input should be shown for each comment
  replyContent: { [key: string]: string } = {}; // Object to store the reply content for each comment

  hours!:number; // Déclarer la variable hours
  constructor(private offre:OffreService, private condidature:CondidatureService,
    private commantaire:CommantaireService ,private reponse:ReponseService
     ,private Activeroute:ActivatedRoute,private formB:FormBuilder
    ) { }

  ngOnInit(): void {
    
   
          this.offrebyid();
          this.formE= this.formB.group({contenu:  ['', Validators.required]})

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


            this.formR=this.formB.group({contenu: ['',Validators.required]})
            if (this.ofre.commantaires && this.ofre.commantaires.length > 0) {
      this.showReplyInput = new Array(this.ofre.commantaires.length).fill(false);
    }
      

  }
    onFileChange(event: any): void {
      if (event.target.files && event.target.files.length > 0) {
        const file = event.target.files[0];
        this.form.patchValue({cv: file});
      }
  }  
      offrebyid(){
        this.offre.getoffreyid(this.id).subscribe((res:any)=>{
          this.ofre=res["data"]
          console.log(" offre",this.ofre)
          
          const commentCreationTimestamp = new Date(this.ofre.createdAt).getTime();
    console.log(this.ofre.createdAt,'date')
    const currentTimestamp = new Date().getTime();
    const timeDifference = currentTimestamp - commentCreationTimestamp;
    
  
    // Convert the time difference to hours and days
this.hours = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
   
  
   
  
    console.log(`Time elapsed: ${this.hours} hours`);
  

        })
       
}
toggleReplyInput(index: number) {
  // Toggle the visibility of the reply input field for the comment at the specified index
  this.showReplyInput[index] = !this.showReplyInput[index];
  if (!this.showReplyInput[index]) {
    // If the reply input is hidden, clear the reply content for that comment
    this.replyContent[index] = '';
  }
}

submitReply(index: number) {
  const reply = this.replyContent[index].trim();
  if (reply === '') {
    // Prevent submitting an empty reply
    return;
  }

  // Here, you can handle the submission of the reply content (e.g., send it to the server)
  console.log('Submitted Reply for comment at index', index, ':', reply);

  // Clear the reply input field and hide it after submission
  this.replyContent[index] = '';
  this.showReplyInput[index] = false;
}



  

onPostuler(): void {
  this.submitted = true;
  console.log( this.userconnect.user.condidatId,"hgghfgh")

  const formData = new FormData();
  formData.append('offreId', this.ofre._id);
  formData.append('titreOffre', this.ofre.titre);

  formData.append('name', this.form.value.name);
  formData.append('cv',this.form.get('cv')?.value);
  formData.append('email', this.form.value.email);
  formData.append('Motivation', this.form.value.Motivation);
  formData.append('userId', this.userconnect.user._id);
  formData.append('condidatId', this.userconnect.user.condidatId._id);





  this.condidature.createcondidature(formData).subscribe((res: any) => {
    Swal.fire('Your candidature was added');
    console.log('res', res);
  });
}
getResponsesForCommantaire(commantaireId: string): void {
  this.reponse.getResponsesByCommantaireId(commantaireId).subscribe(
    (responses: any) => {
      console.log(commantaireId, "ali");

      this.rep = responses['data'];
      console.log(this.rep, "reponses");
      console.log(this.selectedCandidate._id, "vv");

      this.filteredResponses = this.rep.filter(
        (response: any) => response.commentaireId === this.selectedCandidate._id
      );

      console.log(this.filteredResponses, 'filteredResponses');
    },
    (error: any) => {
      console.error('Error fetching responses:', error);
    }
  );
}


showCandidateDetails(candidate: any) {
  this.selectedCandidate = candidate; // Store the selected candidate in the variable
  console.log('Selected Candidate:', this.selectedCandidate);
  console.log(this.selectedCandidate._id,"id de comm")
  this.getResponsesForCommantaire(this.selectedCandidate._id);  // Here, you can display the candidate details in a modal or any other format you prefer
}


onSubmit(): void {
  this.submitted = true;

  if (this.formE.invalid) {
    return;
   }
   
   
   
   const contenu=this.formE.value.contenu;
   const i:number=0;
   
   const commentaire={
    offreId:this.ofre._id,
    contenu:contenu,
    userId:this.userconnect.user._id
   }
  //  const notification={
  //   condidatId:this.userconnect.user.condidatId._id,
  //   contenu:this.userconnect.user.condidatId.name +'a postuler '+this.ofre.titre,
  //   offreId:this.ofre._id
  //  }
  //  this.commantaire.createNot(notification).subscribe((res:any)=>{
  //   Swal.fire('your not was  added')
  //  })
   this.commantaire.createcomm(commentaire).subscribe((res:any)=>{
   
    console.log(this.formE.value)
    Swal.fire('your commantaire was added ')
    console.log('res',res)
    
    
  
  }
  
  
  );

 
  console.log(JSON.stringify(this.formE.value, null, 2));
  
}

 toggleChat() {
  var chatComponent = document.getElementById('chat-component')!;

  if (chatComponent.classList.contains('chat-hidden')) {
    chatComponent.style.display = 'block';
    chatComponent.classList.remove('chat-hidden');
  } else {
    chatComponent.style.display = 'none';
    chatComponent.classList.add('chat-hidden');
  }
}

onReponse(index:number):void{
  if (this.formR.invalid) {
    return;
   }
   const contenu=this.formR.value.contenu;
   const i:number=0;
   
   const reponse={
    commentaireId:this.selectedCandidate._id,
    contenu:contenu,
    condidatId:this.userconnect.user.condidatId._id
   }
   this.reponse.createR(reponse).subscribe((res:any)=>{
   
    console.log(this.formE.value)
    Swal.fire('your reponse was added ')
    console.log('res',res)

    this.filteredResponses.push(reponse);
    
    
  
  }

  
  
  );
  this.replyContent[index] = '';
  this.showReplyInput[index] = false;
 
  console.log(JSON.stringify(this.formE.value, null, 2));
  

}


}

