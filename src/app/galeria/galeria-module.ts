import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GaleriaRoutingModule } from './galeria-routing-module';
import { Galeria } from './galeria/galeria';
import { ɵInternalFormsSharedModule } from "@angular/forms";


@NgModule({
  declarations: [
    Galeria
  ],
  imports: [
    CommonModule,
    GaleriaRoutingModule,
    ɵInternalFormsSharedModule
]
})
export class GaleriaModule { }
