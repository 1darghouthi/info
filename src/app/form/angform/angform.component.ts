import { Component, OnInit } from '@angular/core';
import { UserForm } from './usersform';

@Component({
  selector: 'app-angform',
  templateUrl: './angform.component.html',
  styleUrls: ['./angform.component.scss']
})
export class AngformComponent implements OnInit {
user = new UserForm ('','')
tel!:number;
  constructor() { }

  ngOnInit(): void {
  }
onSelect(){
  console.log(this.user);
  console.log("t",this.tel);
  
}
}
