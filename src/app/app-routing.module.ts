import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivateService } from './Services/activate.service';
import { IsAdminOrLandlordService } from './Services/is-admin-or-landlord.service';
import { IsAdminService } from './Services/is-admin.service';

const routes: Routes = [
  {path:'', loadComponent:()=> import('./home/home.component').then(c=>c.HomeComponent)},
  {path:'add/:id', canActivate:[IsAdminOrLandlordService], loadComponent:()=>import('./add-property/add-property.component').then(c=>c.AddPropertyComponent)},
  // {path:'', loadComponent:()=> import('./footer/footer.component').then(c=>c.FooterComponent)}
  {path:'property/:id', loadComponent:()=>import('./single-property/single-property.component').then(c=>c.SinglePropertyComponent)},
  {path:'property' ,canActivate:[ActivateService]  ,loadComponent:()=>import('./property/property.component').then(c=>c.PropertyComponent)},
  {path:'login', loadComponent:()=>import('./login/login.component').then(c=>c.LoginComponent)},
  {path:'signup', loadComponent:()=>import('./signup/signup.component').then(c=>c.SignupComponent)},
  {path:'lsignup', loadComponent:()=>import('./land-lord-registration/land-lord-registration.component').then(c=>c.LandLordRegistrationComponent)},
  {path:'llogin', loadComponent:()=>import('./land-lord-login/land-lord-login.component').then(c=>c.LandLordLoginComponent)},
  {path:'landlords',canActivate:[IsAdminService], loadComponent:()=>import('./landlords/landlords.component').then(c=>c.LandlordsComponent)},
  {path:'myProperties',canActivate:[IsAdminOrLandlordService], loadComponent:()=>import('./my-properties/my-properties.component').then(c=>c.MyPropertiesComponent)}
 , {path:'counter', loadComponent:()=>import('./counter/counter.component').then(c=>c.CounterComponent)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
