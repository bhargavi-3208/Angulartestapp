import { Injectable } from '@angular/core';
import { Product } from './models/product.model';

@Injectable({
  providedIn: 'root'
})
export class BikeService {

  constructor() { }

  private bikes:Product[]=[

    {
    productTitle:"Leader",
    description:"LEADER Passion Bike 24T cycle is the perfect choice for your because of its high built quality and great reliability",
    productImage:"https://cdn.shopify.com/s/files/1/0524/1346/4726/products/Passion-bike-IBC-Red_474d79f0-7968-42f2-9827-4264cd4bbcc2.jpg?v=1609747709"
    },
    {
    productTitle:"Leader",
    description:"LEADER Scout 26T cycle is the perfect choice for your because of its high built quality and great reliability. ",
    productImage:"https://cdn.shopify.com/s/files/1/0524/1346/4726/products/scout-26T-main-..jpg?v=1609739740"
    },
    
    {
    productTitle:"choosemybicycle",
    description:"The WaltX Dune 1 is a Fat Bike which has a Strong TIG Welded Steel Frame",
    productImage:"https://s3.ap-south-1.amazonaws.com/choosemybicycle/images/bicycles/waltx-dune-1.jpg"
    },
    
    {
    productTitle:"Caya",
    description:" Hypermax 16 Inches Is Suitable For 8-10 Year Old. ",
    productImage:"https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcT9A6nwOMUIXPiSAjW9wdFGXsYob_F7e9gBl-TmpsjcuuYZAHqN8MDB_4haTodRW70ZQD_MRyXaqfs2QeOGJco3obi7mJjf&usqp=CAY"
    },
    
    {
    productTitle:"Vyana Sales",
    description:" Dust Proof And Uv Resistant Superior Quality Front Shock Absorber,",
    productImage:"https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQuOlyCYZc0mAUnlqbtMRHRKm2SiYAB9NeiHDm8BntYU4qlcKvURuyiKzRZUAMcOMiOSVoxPSN-rLGBsuDw6Rs3HpL4ov5z&usqp=CAY"
    },
    
    {
    productTitle:"Caya Fueled Cycle",
    description:"Model: Fueled , Size: 26 ,Features: Front Shockers Dual Disc Brakes Front And Rear",
    productImage:"https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSA3LUOkUa8KY0wcqo9PlijjdQYJWRsjmoxj3mMVKfzBS3aHLj1v5ARufd7QKySPVh9Qumcfb5_xQyLuKP7LWfK_fnUqSMhfA&usqp=CAY"
    }
    
    ];



    getBikesData():Product[]{
      return this.bikes;
    }
}
