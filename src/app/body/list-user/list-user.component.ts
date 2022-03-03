import { Component, OnInit } from '@angular/core';
import { User } from '../Models/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.scss']
})
export class ListUserComponent implements OnInit {
  list!: User[];

  constructor(private listserv:UserService) { }


  ngOnInit(): void {
    this.getuser()}
    getuser(){
      this.list=this.listserv.ListUser()
    }
  }


