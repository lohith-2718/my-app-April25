import { Component } from '@angular/core';

@Component({
  selector: 'app-bmi',
  templateUrl: './bmi.component.html',
  styleUrls: ['./bmi.component.css']
})
export class BMIComponent {
  l:number=0;
  b:number=0;
  sum:number=0;
  a(){this.sum=this.l*this.b;}
  p(){this.sum=2*this.l+2*this.b;}

}
