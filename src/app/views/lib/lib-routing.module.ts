import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LibComponent } from './lib/lib.component';

const routes: Routes = [{ path: '', component: LibComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LibRoutingModule {}
