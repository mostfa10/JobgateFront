import { Component, OnInit } from '@angular/core';
import { OffreService } from 'src/app/services/offre.service';
import { ActivatedRoute, Router } from '@angular/router';
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
  couldPostule : boolean = false;
  constructor(private offre:OffreService, private condidature:CondidatureService,
    private commantaire:CommantaireService ,private reponse:ReponseService
     ,private Activeroute:ActivatedRoute,private formB:FormBuilder,
     private router: Router
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
            if (this.ofre && this.ofre.commantaires && this.ofre.commantaires.length > 0) {
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
      this.checkIfCouldPostule()
      const commentCreationTimestamp = new Date(this.ofre.createdAt).getTime();
      const currentTimestamp = new Date().getTime();
      const timeDifference = currentTimestamp - commentCreationTimestamp;
      this.hours = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
      })
       
    }
    navigateToTest() {
      this.router.navigate(['/test'], { queryParams: { offreId: this.ofre._id } });
    }
    toggleReplyInput(index: number) {
      this.showReplyInput[index] = !this.showReplyInput[index];
      if (!this.showReplyInput[index]) {
        this.replyContent[index] = '';
      }
    }

  

    onPostuler(): void {
      this.submitted = true;
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
        document.getElementById('exampleModalLong')?.classList.add('hidden'); // enlever le modal de condidature
        document.getElementsByClassName('modal-backdrop fade in')?.item(0)?.classList.add('hidden'); // enelever le background condidature
      });
    }
    getResponsesForCommantaire(commantaireId: string): void {
      this.reponse.getResponsesByCommantaireId(commantaireId).subscribe(
        (responses: any) => {

          this.rep = responses['data'];

          this.filteredResponses = this.rep.filter(
            (response: any) => response.commentaireId === this.selectedCandidate._id
          );

        },
        (error: any) => {
          console.error('Error fetching responses:', error);
        }
      );
    }


    showCandidateDetails(candidate: any) {
      this.selectedCandidate = candidate; // Store the selected candidate in the variable
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

      this.commantaire.createcomm(commentaire).subscribe((res:any)=>{
          this.ofre.commantaires.unshift(res.data)
          this.formE.reset({contenu:''})
      }
      
      
      );

    
      
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
      
      let comment = this.ofre.commantaires[index]
      const reponse={
        commentaireId:comment._id,
        contenu:contenu,
        image: this.userconnect.user.isCondidat ? this.userconnect.user.condidatId.image : this.userconnect.user.entrepriseId.image,
        username : this.userconnect.user.isCondidat ? this.userconnect.user.condidatId.name +' ' + this.userconnect.user.condidatId.lastname : this.userconnect.user.entrepriseId.fullname
      }

      this.reponse.createR(reponse).subscribe((res:any)=>{
        this.ofre.commantaires[index].reponses.push(res.data)
        this.replyContent[index] = '';
        // this.showReplyInput[index] = false;
      });

    
      

    }

    checkIfCouldPostule(){
      let condidatId = this.userconnect.user.condidatId._id
      let score = this.ofre.score.filter((s:any) => s.candidatId === condidatId)
      this.couldPostule = score.length > 0;
    }
}

