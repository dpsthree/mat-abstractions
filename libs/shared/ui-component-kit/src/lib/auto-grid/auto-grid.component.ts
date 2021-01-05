import { Component, Input } from '@angular/core';

@Component({
  selector: 'mab-auto-grid',
  templateUrl: './auto-grid.component.html',
  styleUrls: ['./auto-grid.component.scss'],
})
export class AutoGridComponent {
  @Input() gridColMin = '20ch';
  @Input() contentColMin = '10ch';
}
