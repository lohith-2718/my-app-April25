import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent {
  ages:number[]=[10,13,24,56,31,17];

  states:string[]=['telangana','andhra','karnataka','tamilnadu',];
  products:any[]=[
    {name:'pen', price:30, rating:3.4},
    {name:'book', price:170, rating:4.4},
    {name:'shirt', price:1500, rating:4.8},
    {name:'laptop', price:30000, rating:4.7},
    {name:'bike', price:100000, rating:3.1},
  ]

}
