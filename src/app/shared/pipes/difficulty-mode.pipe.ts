import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'difficultyMode',
})
export class DifficultyModePipe implements PipeTransform {
  transform(value: string, ...args: unknown[]): string {
    let parsedValue = '';
    if (value === 'easy') {
      return 'Fácil';
    } else if (value === 'regular') {
      return 'Medio';
    } else if (value === 'hard') {
      return 'Difícil';
    }
    return parsedValue;
  }
}
