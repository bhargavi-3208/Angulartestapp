import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product.model';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent  {

  products:Product[]=[

    {
    productTitle:"Rolex Watch",
    description:"The dial is the distinctive face of a Rolex watch, the feature most responsible for its identity and readability",
    productImage:"https://content.rolex.com/dam/2021/upright-bba-with-shadow/m126200-0020.png?impolicy=v6-upright&imwidth=420"
    },
    {
    productTitle:"Smart Clock",
    description:"Equipped with the Google Assistant which works easily and seamlessly with over many smart home devices",
    productImage:"https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcS-GDb4nq75_8_idbu_gCDTdG1HfzIhPt6W6nVMZTWEo5FxQzyTbzECB7GqX5SUCKC0OB_a-WSt5rFOuH4hDKG1_Yxewf6uTOYGh3aptbY7kGUfsfUY3bxWqil1qveV&usqp=CAE"
    },
    
    {
    productTitle:"Cosmetics",
    description:"The lipstick is enriched with vitamins A and C to give your lips a hydrated and cared-for feel every day.",
    productImage:"https://images-static.nykaa.com/media/catalog/product/tr:h-800,w-800,cm-pad_resize/3/6/3607349610357_1.jpg"
    },
    
    {
    productTitle:"Makeup Kit",
    description:"Cleanses skin while maintaining the pH balance of the skin,Repairs and nourishes the skin barrier, making it stronger,Potent ingredients to address specific skin issues",
    productImage:"https://cdn.shopify.com/s/files/1/2028/2057/files/skinbanew.png?v=1619088706"
    },

    {
      productTitle:"IPOD",
      description:"Genuine stand alone Generation 4 Apple iPod internally waterproofed with Swimman Australia Patented internal waterproofing technology.",
      productImage:"https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSM_hGqKgVZLaZNIOy7Aj369gYghZ_76SjKbmh4VgIzozJDPvsXgMZXDvNw_Wwm6CPgf0kJJa5QhndwfgBPVa5qYEncE7quDqH4wdn3t6eBs9aoFZS3yhw6viaHJvc&usqp=CAE"
    },

    {
      productTitle:"Perfume",
      description:"An intense new facet of the COCO MADEMOISELLE personality emerges to forge a powerful, deep, addictive fragrance that is irresistible in every way.",
      productImage:"https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSzUQOyRn-BZMSjDLAX0zf1LnbVZWJfqcap9Bfy41QTrGmK0DmBi-7TdduY_hhypCkOckHhpRi259KYZdoz1cj-uv6zku33-j_8b7Nk1-vF03s5SZFOJci43vFZ7yI&usqp=CAE"
    },

    

  ];




    productsSentByChild=[];
    productCount:number=0;

    getProductDetailsFromChild(productTitle){

     
      this.productsSentByChild.push(productTitle);
      this.productCount++;
    }

}