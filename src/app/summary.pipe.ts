import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'summary',
})
export class SummaryPipes implements PipeTransform {
  transform(value: string, limits?: number) {
    if (!value) return null;

    let actualLimit = limits ? limits : 50;
    return value.substr(0, actualLimit) + '...';
  }
}
