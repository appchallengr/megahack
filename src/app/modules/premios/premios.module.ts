import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PremiosRoutingModule } from './premios-routing.module';
import { PremiosComponent } from './premios.component';


@NgModule({
  declarations: [PremiosComponent],
  imports: [
    CommonModule,
    PremiosRoutingModule
  ]
})
export class PremiosModule { }
