import { Directive, Input } from '@angular/core';

@Directive({
  selector: '[appProjectedItem]',
  standalone: true
})
export class ProjectedItemDirective {
  @Input() description: string = '';
}