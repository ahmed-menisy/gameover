import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayotAuthComponent } from './components/layot-auth/layot-auth.component';
import { LayotBlankComponent } from './components/layot-blank/layot-blank.component';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from '../views/navbar/navbar.component';
import { FooterComponent } from '../views/footer/footer.component';
import { PipesModule } from './pipes/pipes.module';

@NgModule({
  declarations: [
    LayotAuthComponent,
    LayotBlankComponent,
    NavbarComponent,
    FooterComponent,
  ],
  imports: [CommonModule, RouterModule, PipesModule],
  exports: [NavbarComponent, FooterComponent],
})
export class SharedModule {}
