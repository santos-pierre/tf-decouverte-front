import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html'
})
export class ListUsersComponent implements OnInit {

  listUser : any[] = []

  constructor(
    private userServe : UserService,
  ) { }

  ngOnInit(): void {
    this.geteAllUseres()
  }

  geteAllUseres(){
    this.userServe.getAll().subscribe((listUser) => {
      this.listUser = listUser
    })
  }

}


