import { Component, OnInit } from '@angular/core';
import {TelevisionService} from '../television.service'
import { Product } from '../models/product.model';

@Component({
  selector: 'app-televisions',
  templateUrl: './televisions.component.html',
  styleUrls: ['./televisions.component.css']
})
export class TelevisionsComponent implements OnInit{
  
  televisions:Product[]=[];

 constructor(private tsObj :TelevisionService){

}

ngOnInit(){
  this.televisions=this.tsObj.getTelevisionData();
}
  

}
