import { Component, Input } from '@angular/core';

@Component({
  selector: 'mab-n-across-container',
  templateUrl: './n-across-container.component.html',
  styleUrls: ['./n-across-container.component.scss'],
})
export class NAcrossContainerComponent {
  @Input() gridColMin = '20ch';
  @Input() contentColMin = '10ch';
}
