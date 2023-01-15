import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  baseUrl : string = environment.baseUrl

  isConnect : boolean = false
  $isConnect : BehaviorSubject<boolean> = new BehaviorSubject<boolean>(this.isConnect)

  constructor(private httpc : HttpClient) { }

  login(login : string, pwd : string) : Observable<any>
  {
    return this.httpc.post<any>(this.baseUrl + "auth", {login, pwd})
  }

  logout()
  {
      localStorage.removeItem("bearer")
      localStorage.removeItem("name")
      localStorage.removeItem("age")
      localStorage.removeItem("id")
      this.isConnect = false
      this.emit()
  }



  emit(){
    this.$isConnect.next(this.isConnect)
  }
}
