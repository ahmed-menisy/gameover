import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'split',
})
export class SplitPipe implements PipeTransform {
  transform(value: string | undefined): string[] {
    if (value != undefined) return value.split('\n');
    return [];
  }
}
