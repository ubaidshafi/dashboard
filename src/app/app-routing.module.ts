import { DataSource } from '@angular/cdk/collections';
import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmployeesComponent } from './employees/employees.component';
import { GalleryComponent } from './gallery/gallery.component';
import { LeadComponent } from './lead/lead.component';

const routes: Routes = [
  {
    path:'dashboard',component:DashboardComponent
  },   {
   path:'',redirectTo:'dashboard', pathMatch:"full"
 },

//  ************* to redirect to specific heading
 {
  path:'gallery',component:GalleryComponent
 },
 {
 path:'employees',component:EmployeesComponent
 },
 {
  path:'contact',component:ContactComponent
  },
  {
    path:'lead',component:LeadComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
