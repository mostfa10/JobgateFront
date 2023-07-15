import { Component, Input, OnInit } from '@angular/core';
import { CondidatureService } from 'src/app/services/condidature.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-candidatures',
  templateUrl: './candidatures.component.html',
  styleUrls: ['./candidatures.component.css']
})
export class CandidaturesComponent implements OnInit {
  userconnect=JSON.parse(localStorage.getItem("userconnect")!) //tjib les contenu de userconnect de localstorege enregistree lors de login
  condidatures!:any[];
  @Input() offer!: any
  // @Input() offer!: any


  constructor(private condidature:CondidatureService) { }

  ngOnInit(): void {
    this.userconnect = JSON.parse(localStorage.getItem("userconnect")!);
    this.listecondidatures();
  }
  deleteC(id:any){
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.condidature.deleteC(id).subscribe((res:any)=>{ // subscribe pour donne l accees ala BD
          console.log(res)
          this.listecondidatures()
        })
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      }
    })
  }
  
  listecondidatures() {
    const userConnectId = this.userconnect.user._id;

    this.condidature.getAllCondidatures(userConnectId).subscribe(
      (res: any) => {
        this.condidatures = res.data;
        console.log("Liste des condidatures", this.condidatures);
      },
      (error: any) => {
        console.error("Erreur lors de la récupération des condidatures", error);
      }
    );
  }
}
