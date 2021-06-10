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
        planName: "Free",
        currency:"$",
        price: 0,
        period:"per month",
        offers :[
          {
            offer:"Single User",
            isEnable:true,
            isbold:true
          },
          {
            offer:"5GB Storage",
            isEnable:true,
            isbold:true
          },
          {
            offer:"Unlimited Public Projects",
            isEnable:true,
            isbold:true
          },
          {
            offer:"Community Access",
            isEnable:true,
            isbold:true
          },
          {
            offer:"Unlimited Private Projects",
            isEnable:false,
            isbold:true
          },
          {
            offer:"Dedicated Phone Support",
            isEnable:false,
            isbold:true
          },
          {
            offer:"Free Subdomain",
            isEnable:false,
            isbold:true
          },
          {
            offer:"Monthly Status Reports",
            isEnable:false,
            isbold:true
          }
        ]
     },
     {
      planName: "PLUS",
      currency:"$",
      price: 9,
      period:"/month",
      offers :[
        {
          offer:"5 User",
          isEnable:true,
          isbold:false
        },
        {
          offer:"50GB Storage",
          isEnable:true,
          isbold:true
        },
        {
          offer:"Unlimited Public Projects",
          isEnable:true,
          isbold:true
        },
        {
          offer:"Community Access",
          isEnable:true,
          isbold:true
        },
        {
          offer:"Unlimited Private Projects",
          isEnable:true,
          isbold:true
        },
        {
          offer:"Dedicated Phone Support",
          isEnable:true,
          isbold:true
        },
        {
          offer:"Free Subdomain",
          isEnable:true,
          isbold:true
        },
        {
          offer:"Monthly Status Reports",
          isEnable:false,
          isbold:true
        }
      ]
     },
     {
      planName: "PRO",
      currency:"$",
      price: 49,
      period:"per month",
      offers :[
        {
          offer:"Unlimited User",
          isEnable:true,
          isbold:false
        },
        {
          offer:"5GB Storage",
          isEnable:true,
          isbold:true
        },
        {
          offer:"Unlimited Public Projects",
          isEnable:true,
          isbold:true
        },
        {
          offer:"Community Access",
          isEnable:true,
          isbold:true
        },
        {
          offer:"Unlimited Private Projects",
          isEnable:true,
          isbold:true
        },
        {
          offer:"Dedicated Phone Support",
          isEnable:true,
          isbold:true
        },
        {
          offer:"Unlimited Free Subdomain",
          isEnable:true,
          isbold:true
        },
        {
          offer:"Monthly Status Reports",
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
