import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'term',
})
export class TermPipe implements PipeTransform {
  transform(text: string | undefined, limit: number): string {
    if (text != undefined) return text.split(' ', limit).join(' ');
    return '';
  }
}
