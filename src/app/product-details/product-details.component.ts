import { Component, Output, Input, EventEmitter } from '@angular/core';

import { Product } from '../models/productmodel';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent  {

  @Input() productObj:Product;

  @Output() myEvent=new EventEmitter();

  sendProductDetailsToParent(productTitle){
         this.myEvent.emit(productTitle);
  }

}
