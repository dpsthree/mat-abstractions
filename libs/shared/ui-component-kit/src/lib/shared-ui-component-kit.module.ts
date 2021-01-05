import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedUiMatDepsModule } from '@mat-abstractions/shared/ui-mat-deps';
import { DashboardCardComponent } from './dashboard-card/dashboard-card.component';
import { FavoriteCardComponent } from './favorite-card/favorite-card.component';
import { AppFramerComponent } from './app-framer/app-framer.component';
import { FeatureLayoutComponent } from './feature-layout/feature-layout.component';
import { AutoGridComponent } from './auto-grid/auto-grid.component';


@NgModule({
  imports: [CommonModule, SharedUiMatDepsModule],
  declarations: [
    DashboardCardComponent,
    FavoriteCardComponent,
    AppFramerComponent,
    FeatureLayoutComponent,
    AutoGridComponent,
  ],
  exports: [
    DashboardCardComponent,
    FavoriteCardComponent,
    AppFramerComponent,
    FeatureLayoutComponent,
    AutoGridComponent,
  ],
})
export class SharedUiComponentKitModule {}
