import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { FakedataService } from '../fakedata.service';

import { User } from '../models/users.model';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit ,OnDestroy{

  mySubscription:Subscription;

  myUsers:User[]=[];

  
  //inject Fakedata service object
  constructor(private fsObj:FakedataService) { }

  ngOnInit(): void {
   this.mySubscription= this.fsObj.getUsers().subscribe(
      usersData=>{
      
        this.myUsers=usersData;
        console.log(this.myUsers)
       
      },
      err=>{
        console.log("err in getting posts data",err)
      }

    )
  }



  ngOnDestroy(){
    this.mySubscription.unsubscribe();
  }
}