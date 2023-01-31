import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent implements OnInit {

  constructor(private us: UserserviceService, private myrouter:Router) { }

  ngOnInit(): void {
  }

  loginValues:any;
  loginValid:any;

  userLogin(userloginForm:any)
  {
    console.log(userloginForm.value);
    this.loginValues=userloginForm.value;
    console.log(this.loginValues);
    
    this.us.userLogin(this.loginValues).subscribe(
      (data)=>{
        console.log(data);
        this.loginValid=data;
        if(this.loginValid)
        {
          localStorage.setItem("email",this.loginValues.email);
          this.myrouter.navigate(['userdetails']);
          alert("sign up successfully...");
                
        }
        else
        {
          alert("Invalid User Login");
          
        }
      }
    )

}
}