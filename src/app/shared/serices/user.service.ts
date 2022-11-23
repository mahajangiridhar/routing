import { Injectable } from '@angular/core';
import { Iuser } from '../model/model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  singleUser!: Iuser|undefined 
  public userArray: Iuser[]=[
    {
      id: 1,
      userName: "July"
    },
    {
      id: 2,
      userName: "Jhon"
    },
    {
      id: 3,
      userName: "June"
    }
  ]
  constructor() { }
  getAllUser():Iuser[]{
    return this.userArray
  }
  getSingleUser(id:number){
    return this.singleUser = this.userArray.find((ele)=>{
      return ele.id === id;
    })
  }
}
