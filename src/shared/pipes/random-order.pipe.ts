import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'randomOrder',
  standalone: true,
})
export class RandomOrderPipe implements PipeTransform {
  transform<T>(list: T[]): T[] {
    if (!Array.isArray(list)) {
      return list;
    }

    return [...list].sort(() => Math.random() - 0.5);
  }
}
