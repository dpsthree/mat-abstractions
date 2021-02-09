import { Directive, Input } from '@angular/core';

@Directive({
  selector: '[mabAutoGrid]',
  host: {
    '[style.--grid-min]': 'mabAutoGrid',
    '[attr.mabAutoGrid]': 'true',
    '[class.column]': 'column'
  },
})
export class AutoGridDirective {
  @Input() mabAutoGrid = '20ch';
  @Input() column = false;
}
