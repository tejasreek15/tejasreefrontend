import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user'
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-personaldetails',
  templateUrl: './personaldetails.component.html',
  styleUrls: ['./personaldetails.component.css']
})
export class PersonaldetailsComponent implements OnInit {

  constructor(private us: UserserviceService, private myrouter:Router) { }

  ngOnInit(): void {
  }

  user:User = new User();

  userDetails(item:any)
  {
    console.warn(item);

  }

  appData: any;

  saveUser(userForm:any)
  {
    this.user = userForm.value;
    console.log(this.user);
    this.us.addUser(this.user).subscribe(
      (data)=>{
        console.log(data);
        this.appData=data;
        localStorage.setItem("id", this.appData.id);
        alert("User Details Added...");
        this.myrouter.navigate(['/login']);
      },
      (error)=>
      {console.log(error);
      }
    )

  }


}
