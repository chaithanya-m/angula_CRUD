import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lis',
  templateUrl: './lis.component.html',
  styleUrls: ['./lis.component.css']
})
export class LisComponent implements OnInit {

  constructor() { }
  fruits:string[]=["apple","mango","orenge","grapes"];


  ngOnInit(): void {
  }

}
