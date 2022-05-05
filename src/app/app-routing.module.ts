import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomeModule)
  },
  {
    path: 'company',
    loadChildren: () => import('./company/company.module').then( m => m.DestinationModule)
  },
  {
    path: 'product',
    loadChildren: () => import('./product/product.module').then( m => m.CrewModule)
  },
  {
    path: 'tech',
    loadChildren: () => import('./technology/tech.module').then( m => m.TechModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
