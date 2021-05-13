import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-televisions',
  templateUrl: './televisions.component.html',
  styleUrls: ['./televisions.component.css']
})
export class TelevisionsComponent  {
  telivisions=[

    {
    productTitle:"Samsung",
    description:"Crystal Display ensures optimized colour expression so you can see every detail.",
    productImage:"https://images.samsung.com/is/image/samsung/in-uhd-tv-tue60a-ua65tue60akxxl-fronttitangray-231850798?$684_547_PNG$"
    },
    {
    productTitle:"Samsung",
    description:"Evolution of Neo QLED comes with Quantum Matrix Technology, which precisely controls our exclusive new Quantum Mini LED.",
    productImage:"https://www.reliancedigital.in/medias/Samsung-55QN90A-Television-492166321-20?context=bWFzdGVyfGltYWdlc3wyOTc1MnxpbWFnZS9qcGVnfGltYWdlcy9oYWMvaDdmLzk1Mzk1Njc1ODMyNjIuanBnfGUwYmZjMmMyM2RhNTIxYjkzYmFhZTc3ZmMxNjUwZmEwNGM2YWQ0OGI0YjZlNWExNzJlYzc0MDI5MzYyOTBiZTk"
    },
    
    {
    productTitle:"Mi TV",
    description:"The Mi TV 4A runs Amlogic 64-bit quad core SoC coupled with 1GB of RAM. It has 8GB of internal storage",
    productImage:"https://i01.appmifile.com/v1/MI_18455B3E4DA706226CF7535A58E875F0267/pms_1587897232.9716042.png"
    },
    
    {
    productTitle:"Samsung",
    description:"High-Dynamic Range levels up bright expression of your TV, so you can enjoy an immense spectrum of colors and visual details, even in dark scenes.",
    productImage:"https://images.samsung.com/is/image/samsung/in-hd-tv-t4340-ua32t4340akxxl-ua--t----akxxl-274199923?$684_547_PNG$"
    },
    
    {
    productTitle:"LG",
    description:"NanoCell TV is LG's most advanced LED TV that delivers superior picture quality with enhanced RGB color purity thanks to LG's NanoCell technology",
    productImage:"https://www.reliancedigital.in/medias/LG-55SM8100PTA-Televisions-491431589-i-2-1200Wx1200H-96Wx96H?context=bWFzdGVyfGltYWdlc3wyNDIxfGltYWdlL2pwZWd8aW1hZ2VzL2gyOC9oNTYvOTQ0MDU2MzQyOTQwNi5qcGd8ZGI4Yjc1MGZjMTM4YjQwZDRjMzA2ZjFlNTYyMzdiNjc1OWQxYzE1NDRjYWRhYzYzYjYwZGIzMWM5Y2NlOTcwOA"
    },
    
    {
    productTitle:"Realme",
    description:"The realme Smart TV features a Premium Bezel-less design with bezels as thin as 8.7mm. This is the immersive smart cinema experience your living room needs",
    productImage:"https://www.reliancedigital.in/medias/Realme-Realme-55-Televisions-491973486-i-1-1200Wx1200H-96Wx96H?context=bWFzdGVyfGltYWdlc3wyMjkzNXxpbWFnZS9qcGVnfGltYWdlcy9oNGUvaGU2Lzk0NzU5NzIzNjYzNjYuanBnfGU5MWZmYjliYzA3MGRiZGYxNzI1NDAyODgxMDYzMThlOWRjODM2NjBkOTYzYTQ2NGUzZGIwYTQzZDU4MmY4MDc"
    }
    
  ]
  

}
