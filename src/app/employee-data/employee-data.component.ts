import { Component } from '@angular/core';

@Component({
  selector: 'app-employee-data',
  templateUrl: './employee-data.component.html',
  styleUrls: ['./employee-data.component.css']
})
export class EmployeeDataComponent {
   products:any[]=[
    {name:'pen', price:30, rating:3.4,del:'no'},
    {name:'phone', price:10000, rating:4.4,del:'yes'},
    {name:'shirt', price:1500, rating:4.8,del:'no'},
    {name:'cap', price:300, rating:4.7,del:'yes'},
    {name:'mobile case', price:100, rating:3.1,del:'yes'},
    {name:'remote', price:400, rating:3.1,del:'no'}
  ];

   productAll=this.products
  delete(i:any){
this.productAll.splice(i,1)}

  ph(){ this.productAll=this.products.sort((a:any,b:any)=>b.price-a.price)}

  pl(){
     this.productAll=this.products.sort((a:any,b:any)=>a.price-b.price)
  }
  rh(){    this.productAll=this.products.sort((a:any,b:any)=>b.rating-a.rating)


  }
  rl(){  this.productAll=this.products.sort((a:any,b:any)=>a.rating-b.rating)

  }

s:String="";
  search()
    {this.products=this.products.filter((p:any)=>p.name.includes(this.s));}
  

dis(){this.products=this.products.map((a:any)=>{a.price=a.price/2;
    return a;
  })}

   expenditure(){
  var totalcost;;
  totalcost=this.products.reduce((sum:any,b:any)=>sum+b.price,0);
  alert(totalcost)}

     delivery(){this.products=this.products.map((b:any)=>{b.price=b.price+65;
    return b;
  })}

  name:string="";
  price:number=0;
  rating:number=0;

 add(){let a={
  name:this.name,
  price:this.price,
  rating:this.rating,

 }
this.products.unshift(a)}


}
