import { Pipe, PipeTransform } from '@angular/core';
import { TileState } from '@shared/models';

@Pipe({
  name: 'tileState',
})
export class TileStatePipe implements PipeTransform {
  transform(value: unknown, ...args: unknown[]): string {
    let parsedValue = '?';
    if (value === TileState.EMPTY || value === TileState.SHIP) {
      parsedValue = '🌊';
    } else if (value === TileState.SUNKEN_PART_OF_SHIP) {
      parsedValue = '🔥';
    } else if (value === TileState.MISSED_SHOT) {
      parsedValue = '❌';
    }
    return parsedValue;
  }
}
