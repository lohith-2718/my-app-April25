import { Component } from '@angular/core';
import { VehiclesService } from '../vehicles.service';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.css']
})
export class VehiclesComponent {
  vehicles:any=[];
  constructor(private _vehicleSevice:VehiclesService){
    _vehicleSevice.getVehicles().subscribe((data:any)=>{
      console.log(data);
    this.vehicles=data;
  console.log(this.vehicles);
},
(err:any)=>{alert("Internal Server Error")})
}

}
