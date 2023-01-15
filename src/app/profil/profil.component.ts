import { Component, OnInit } from '@angular/core';
import { LoginService } from '../shared/login.service';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html'
})
export class ProfilComponent implements OnInit {

  name : string = ""
  age : number = 0
  id : number = 0


  constructor(
    private userServe : UserService,
  ) { }

  ngOnInit(): void {
  
    this.getMyprofil()
  
  }

  getMyprofil(){
    this.userServe.getOneUserProfil().subscribe((user) => {
      user = user[0]
      this.name = user.Name
      this.age = user.Age
      this.id = user.Id
    })
  }

}
