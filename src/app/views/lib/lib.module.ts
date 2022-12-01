import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LibRoutingModule } from './lib-routing.module';
import { LibComponent } from './lib/lib.component';


@NgModule({
  declarations: [
    LibComponent
  ],
  imports: [
    CommonModule,
    LibRoutingModule
  ]
})
export class LibModule { }
