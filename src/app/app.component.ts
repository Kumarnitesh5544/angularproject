import { Component } from '@angular/core';
import {priceObj}  from  './model2'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'chubbfirstp';
   data: Array<priceObj>=[
     {
        planName: "abcd",
        currency:"100",
        price: 100,
        period:"12",
        offers :[
          {
            offer:"def",
            isEnable:true,
            isbold:true
          },
          {
            offer:"efg",
            isEnable:true,
            isbold:true
          },
          {
            offer:"def",
            isEnable:true,
            isbold:true
          }
        ]
     },
     {
      planName: "efgh",
      currency:"100",
      price: 100,
      period:"12",
      offers :[
        {
          offer:"def",
          isEnable:true,
          isbold:true
        },
        {
          offer:"efg",
          isEnable:true,
          isbold:true
        },
        {
          offer:"def",
          isEnable:true,
          isbold:true
        }
      ]
     },
     {
      planName: "ijkl",
      currency:"100",
      price: 100,
      period:"12",
      offers :[
        {
          offer:"def",
          isEnable:true,
          isbold:true
        },
        {
          offer:"efg",
          isEnable:true,
          isbold:true
        },
        {
          offer:"def",
          isEnable:true,
          isbold:true
        }
      ]
     }
   ]

   constructor(){
    this.data.forEach((element)=>{
        
    })
   }
   
      
}
