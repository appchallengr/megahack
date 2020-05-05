import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PremiosComponent } from './premios.component';


const routes: Routes = [
  { path: '', component: PremiosComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PremiosRoutingModule { }
