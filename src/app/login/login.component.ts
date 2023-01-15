import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../shared/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  login : string = "Loïc"
  pwd : string = "test1234"

  constructor(
    private loginServe : LoginService,
    private router : Router
    ) { }

  ngOnInit(): void {
  }

  loginFct(){
    this.loginServe.login(this.login, this.pwd).subscribe((res) => {
      if(res.Id && res.bearer)
      {

        localStorage.setItem("bearer", res.bearer)
        localStorage.setItem("name", res.Name)
        localStorage.setItem("age", res.Age)
        localStorage.setItem("id", res.Id)
        this.loginServe.isConnect = true
        this.loginServe.emit()
        this.router.navigate(["/profil"])
      }
      else{
        this.router.navigate(["/login"])
      }
    })
  }

  logoutFct(){
    this.loginServe.logout()
  }
}
