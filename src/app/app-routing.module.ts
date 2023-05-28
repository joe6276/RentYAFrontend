import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'', loadComponent:()=> import('./home/home.component').then(c=>c.HomeComponent)},
  {path:'add', loadComponent:()=>import('./add-property/add-property.component').then(c=>c.AddPropertyComponent)},
  // {path:'', loadComponent:()=> import('./footer/footer.component').then(c=>c.FooterComponent)}
  {path:'property/:id', loadComponent:()=>import('./single-property/single-property.component').then(c=>c.SinglePropertyComponent)},
  {path:'property' ,loadComponent:()=>import('./property/property.component').then(c=>c.PropertyComponent)},
  {path:'login', loadComponent:()=>import('./login/login.component').then(c=>c.LoginComponent)},
  {path:'signup', loadComponent:()=>import('./signup/signup.component').then(c=>c.SignupComponent)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
