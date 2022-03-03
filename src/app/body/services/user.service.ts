import { Injectable } from '@angular/core';
import { ListUserComponent } from '../list-user/list-user.component';
import { User } from '../Models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  list!: User[];

  

  constructor() { }

ListUser():User[]{
  return this.list=[{Nom:"Anis",Prenom:"Darghouthi",id:3},
  {Nom:"Ahmed",Prenom:"radaddi",id:5},
  {Nom:"kamel",Prenom:"touiti",id:1}]
}}
