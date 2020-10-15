import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedUiMatDepsModule } from '@mat-abstractions/shared/ui-mat-deps';
import { DashboardCardComponent } from './dashboard-card/dashboard-card.component';
import { CardDragListComponent } from './card-drag-list/card-drag-list.component';

@NgModule({
  imports: [CommonModule, SharedUiMatDepsModule],
  declarations: [DashboardCardComponent, CardDragListComponent],
  exports: [DashboardCardComponent, CardDragListComponent],
})
export class SharedUiComponentKitModule {}
