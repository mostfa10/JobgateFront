import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  loggedIn: boolean = true;

  constructor(private http:HttpClient) { }

  signin(login:any){
    this.loggedIn= true;
    return this.http.post(`${environment.JobGateBD}/auth/signin`,login)
  }
  createCondidat(condidat:any){
    return this.http.post(`${environment.JobGateBD}/condidat`,condidat)
  }

  createentreprise(entreprise:any){
    return this.http.post(`${environment.JobGateBD}/entreprise`,entreprise)
  }


  signup(register:any){
    console.log(register,"reg")
    return this.http.post(`${environment.JobGateBD}/auth/signup`,register)
  }

  saveMessage(message: string) {
    
    
    return this.http.post(`${environment.JobGateBD}/message`,message)

}


}
