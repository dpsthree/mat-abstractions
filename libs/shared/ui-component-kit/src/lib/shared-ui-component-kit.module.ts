import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedUiMatDepsModule } from '@mat-abstractions/shared/ui-mat-deps';
import { DashboardCardComponent } from './dashboard-card/dashboard-card.component';
import { FavoriteCardComponent } from './favorite-card/favorite-card.component';

@NgModule({
  imports: [CommonModule, SharedUiMatDepsModule],
  declarations: [DashboardCardComponent, FavoriteCardComponent],
  exports: [DashboardCardComponent, FavoriteCardComponent],
})
export class SharedUiComponentKitModule {}
