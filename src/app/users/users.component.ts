import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { Fakedata1Service } from '../fakedata1.service';
import { User1 } from '../models/users1.model';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  mySubscription:Subscription;

  myUsers1:User1[]=[];

  
  //inject Fakedata service object
  constructor(private fsObj:Fakedata1Service,private router:Router) { }

  ngOnInit(): void {
   this.mySubscription= this.fsObj.getUsers1().subscribe(
      usersData=>{
      
        this.myUsers1=usersData;
        console.log(this.myUsers1)
       
      },
      err=>{
        console.log("err in getting users data",err)
      }

    )
  }

   onSelectId(id){
       this.router.navigateByUrl('userdetails/'+id)
   }

  ngOnDestroy(){
    this.mySubscription.unsubscribe();
  }
}
