import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SliceuntilePipe } from './sliceuntile.pipe';
import { TermPipe } from './term.pipe';
import { SplitPipe } from './split.pipe';

@NgModule({
  declarations: [SliceuntilePipe, TermPipe, SplitPipe],
  imports: [CommonModule],
  exports: [SliceuntilePipe, TermPipe, SplitPipe],
})
export class PipesModule {}
