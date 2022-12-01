import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SliceuntilePipe } from './sliceuntile.pipe';
import { TermPipe } from './term.pipe';
import { SplitPipe } from './split.pipe';
import { IsloginDirective } from 'src/app/islogin.directive';
import { NotloginDirective } from 'src/app/notlogin.directive';
@NgModule({
  declarations: [
    SliceuntilePipe,
    TermPipe,
    SplitPipe,
    IsloginDirective,
    NotloginDirective,
  ],
  imports: [CommonModule],
  exports: [
    SliceuntilePipe,
    TermPipe,
    SplitPipe,
    IsloginDirective,
    NotloginDirective,
  ],
})
export class PipesModule {}
