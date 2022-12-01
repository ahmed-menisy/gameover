import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrowserRoutingModule } from './browser-routing.module';
import { BrowserComponent } from './browser/browser.component';
import { FormsModule } from '@angular/forms';
import { PipesModule } from 'src/app/shared/pipes/pipes.module';

@NgModule({
  declarations: [BrowserComponent],
  imports: [CommonModule, BrowserRoutingModule, PipesModule, FormsModule],
})
export class BrowserModule {}
