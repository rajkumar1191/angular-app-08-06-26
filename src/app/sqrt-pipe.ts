import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sqrt',
  pure: false, // Set to false to make it an impure pipe that updates on every change detection cycle
})
export class SqrtPipe implements PipeTransform {
  transform(value: unknown): unknown {
    console.log('SqrtPipe called with value:', value);
    return value && typeof value === 'number' ? Math.sqrt(value) : value;
  }
}
