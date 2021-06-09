import { Component, Input, OnInit } from '@angular/core';
import {priceObj}  from '../model2'
@Component({
  selector: 'app-welcome2',
  templateUrl: './welcome2.component.html',
  styleUrls: ['./welcome2.component.css']
})
export class Welcome2Component implements OnInit {
   @Input('priceObj') priceObj:Partial<priceObj> ={}
  constructor() { }

  ngOnInit(): void {
  }

}
