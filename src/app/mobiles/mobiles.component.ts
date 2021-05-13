import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mobiles',
  templateUrl: './mobiles.component.html',
  styleUrls: ['./mobiles.component.css']
})
export class MobilesComponent{

 mobiles=[

  {
  productTitle:"Samsung",
  description:"The Vivo S1 Pro features a 6.39-inch Full HD+ Super AMOLED display at 1080x2340 pixels resolution and 19.5:9 aspect ratio.",
  productImage:"https://www.sathya.in/Media/Default/Thumbs/0038/0038136-vivo-s1-pro-black8gb-ram-128gb-storage-250.jpg"
  },
  {
  productTitle:"Samsung",
  description:"Samsung Galaxy A70 is a premium device that comes with an elegant body and a bezel-less display that compliments the overall look.",
  productImage:"https://priceintanzania.com/wp-content/uploads/2019/04/Samsung-Galaxy-A70-Price-in-Tanzania.jpg"
  },
  
  {
  productTitle:"Honor",
  description:"This Honor Galaxy S9 is in 'Refurbished - Good' condition. Refurbished - Good are opened and used products with visible scratches",
  productImage:"https://5.imimg.com/data5/AW/IX/GLADMIN-53160395/galaxy-s-500x500.png"
  },
  
  {
  productTitle:"Iphone-11",
  description:"The iPhone 11 display has rounded corners that follow a beautiful curved design, and these corners are within a standard rectangle.",
  productImage:"https://img.tatacliq.com/images/i7/1348Wx2000H/MP000000005562292_1348Wx2000H_202011300234051.jpeg"
  },
  
  {
  productTitle:"OnePlus",
  description:"It launched with a Qualcomm Snapdragon 845, a dual-lens camera setup, up to 8 GB RAM, and up to 256 GB of storage.",
  productImage:"https://670354.smushcdn.com/2260778/wp-content/uploads/2021/03/AMZ101-2.jpg"
  },
  
  {
  productTitle:"Google pixel",
  description:"Google Pixel is a brand of consumer electronic devices developed by Google that run either Chrome OS or the Android operating system.",
  productImage:"https://www.91-img.com/pictures/105546-v1-google-pixel-xl-mobile-phone-large-1.jpg"
  }
  
  ]

}