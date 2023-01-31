import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';
import { UserLogin } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  constructor(private myhttp:HttpClient) { }

  restUrl: string = "https://tejasreebackend11.azurewebsites.net";

  addUser(user:User)
  {
    return this.myhttp.post(this.restUrl+"/user",user)
  }

  searcbyEmail(srchText:any)
  {
    return this.myhttp.get(this.restUrl+"/searchuser/"+srchText)
  }

  
  userLogin(userlogin:UserLogin)
  {
    return this.myhttp.post(this.restUrl+"/userlogin", userlogin)
  }

}
