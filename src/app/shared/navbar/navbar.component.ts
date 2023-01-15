import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {

  isCollapsed : boolean = true
  isConnect : boolean = false

  constructor(
    private loginServe : LoginService
  ) { }

  ngOnInit(): void {
    this.loginServe.$isConnect.subscribe((resIsConnect) => {
      this.isConnect = resIsConnect
    })
  }

  logoutFct(){
    this.loginServe.logout()
  }

}
