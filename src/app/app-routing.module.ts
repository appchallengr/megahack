import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ResgatarPremioComponent } from './modules/resgatar-premio/resgatar-premio.component';

const routes: Routes = [
  { path: '', loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule) },
  { path: 'premios', loadChildren: () => import('./modules/premios/premios.module').then(m => m.PremiosModule) },
  { path: 'resgatar-premio', component: ResgatarPremioComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
