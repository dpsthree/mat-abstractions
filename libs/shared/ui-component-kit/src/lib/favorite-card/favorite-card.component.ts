import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'mab-favorite-card',
  templateUrl: './favorite-card.component.html',
  styleUrls: ['./favorite-card.component.scss']
})
export class FavoriteCardComponent {
  @Input('title') title = '';
  @Input('description') description = '';
  @Input('actionLabel') actionLabel = '';
  @Output('action') action = new EventEmitter<void>();

  constructor() { }


}
