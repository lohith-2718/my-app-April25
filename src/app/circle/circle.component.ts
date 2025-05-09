import { Component } from '@angular/core';

@Component({
  selector: 'app-circle',
  templateUrl: './circle.component.html',
  styleUrls: ['./circle.component.css']
})
export class CircleComponent { 
  r:number=0;
  sum:number=0;
  a(){this.sum=this.r*this.r*3.14;}
  p(){this.sum=2*this.r*3.14;}

}
