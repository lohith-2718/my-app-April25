import { Component } from '@angular/core';

@Component({
  selector: 'app-rectangle',
  templateUrl: './rectangle.component.html',
  styleUrls: ['./rectangle.component.css']
})
export class RectangleComponent {
  l:number=0;
  b:number=0;
  sum:number=0;
  a(){this.sum=this.l*this.b;}
  p(){this.sum=2*this.l+2*this.b;}

}
