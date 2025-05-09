import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ErrorComponent } from './error/error.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { RectangleComponent } from './rectangle/rectangle.component';
import { CircleComponent } from './circle/circle.component';
import { BMIComponent } from './bmi/bmi.component';
import { LogoutComponent } from './logout/logout.component';
import { DirectivesComponent } from './directives/directives.component';

const routes: Routes = [
  {path:'login' , component:LoginComponent},
  
  {path:'dashboard',component:DashboardComponent, 
    children:[{path:'home', component:HomeComponent},
              {path:'welcome',component:WelcomeComponent},
              {path:'databinding', component:DataBindingComponent},
              {path:'calculator', component:CalculatorComponent},
              {path:'rectangle', component:RectangleComponent},
              {path:'circle', component:CircleComponent},
              {path:'BMI', component:BMIComponent},
              {path:'logout',component:LogoutComponent},
              {path:'directives',component:DirectivesComponent}
  ]},
  {path:'**', component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
