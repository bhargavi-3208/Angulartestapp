import { Component, OnInit } from '@angular/core';
import {MobileService} from '../mobile.service'
import { Product } from '../models/product.model';

@Component({
  selector: 'app-mobiles',
  templateUrl: './mobiles.component.html',
  styleUrls: ['./mobiles.component.css']
})
export class MobilesComponent implements OnInit{

mobiles:Product[]=[];


 constructor(private msObj :MobileService){

 }

 ngOnInit(){
   this.mobiles=this.msObj.getMobilesData();
 }

}