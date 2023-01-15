import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl : string = environment.baseUrl

  constructor(
    private httpC : HttpClient
  ) { }



  getOneUserProfil() : Observable<any>
  {
    return this.httpC.get<any>(this.baseUrl + "users/" + localStorage.getItem("id"))
  }

  getAll() : Observable<any>
  {
    return this.httpC.get<any>(this.baseUrl + "users/")
  }
}
