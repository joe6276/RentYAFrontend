import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'', loadComponent:()=> import('./home/home.component').then(c=>c.HomeComponent)},
  // {path:'', loadComponent:()=> import('./footer/footer.component').then(c=>c.FooterComponent)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
