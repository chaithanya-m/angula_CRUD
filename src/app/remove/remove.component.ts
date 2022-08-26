import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-remove',
  templateUrl: './remove.component.html',
  styleUrls: ['./remove.component.css']
})
export class RemoveComponent implements OnInit {
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
  remove(fruitName: string){
    for(let i=0;i<=this.fruits.length;i++){
      let a=this.fruits[i];
      if(a.name==fruitName){
        let b=i
      this.fruits.splice(b, 1);
      }
    }   
  }
}
