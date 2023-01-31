import { Component, OnInit } from '@angular/core';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent implements OnInit {

  srchText:any;
  userList:any;

  constructor(private us: UserserviceService) { }

  ngOnInit(): void {
  }

  search()
  {
    this.us.searcbyEmail(this.srchText).subscribe(
      (data)=>{
        console.log(data);
        this.userList=data;
      }
    )
}
}
