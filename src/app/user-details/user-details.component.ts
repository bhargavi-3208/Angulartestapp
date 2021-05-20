import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Fakedata1Service } from '../fakedata1.service';
import { User1 } from '../models/users1.model';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  userObj:User1;
  constructor(private ar:ActivatedRoute,private fs:Fakedata1Service) { }

  ngOnInit(): void {
    let id=this.ar.snapshot.params.id;


    this.fs.getUsersById(id).subscribe(
      obj=>{
         this.userObj=obj;
      },
      err=>{
        console.log("err in reading users",err)
      }
    )
  }

}
