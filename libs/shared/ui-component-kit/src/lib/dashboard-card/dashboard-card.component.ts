import { Component, Input } from '@angular/core';

@Component({
  selector: 'mab-dashboard-card',
  templateUrl: './dashboard-card.component.html',
  styleUrls: ['./dashboard-card.component.scss']
})
export class DashboardCardComponent {
  @Input('imgUrl') imgUrl = '';
  @Input('imgAlt') imgAlt = '';
}
