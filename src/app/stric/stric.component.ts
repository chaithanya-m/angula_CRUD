import { style } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { flush } from '@angular/core/testing';

@Component({
  selector: 'app-stric',
  templateUrl: './stric.component.html',
  styleUrls: ['./stric.component.css']
})
export class StricComponent implements OnInit {
  constructor() { }
   fruits=[
    {
      name:"apple",
      delete: false,
    },
    {
      name:"mango",
      delete: false
    },
    {
      name:"orenge",
      delete:false
    },
    {
      name: "grapes",
      delete: false
    }
  ];
  ngOnInit(): void {
  }
  strike(fruitName: string){
    
    for(let i=0;i<=this.fruits.length;i++){
      let a=this.fruits[i];
      if(a.name==fruitName){
        a.delete=true;
      } 
    }    
  }
  unstrike(fruitName: string){
    for(let i=0;i<=this.fruits.length;i++){
      let a=this.fruits[i];
      if(a.name==fruitName){
        a.delete=false;
      } 
    }   
  }
}
