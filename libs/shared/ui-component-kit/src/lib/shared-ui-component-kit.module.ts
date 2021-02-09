import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedUiMatDepsModule } from '@mat-abstractions/shared/ui-mat-deps';
import { DashboardCardComponent } from './dashboard-card/dashboard-card.component';
import { FavoriteCardComponent } from './favorite-card/favorite-card.component';
import { AppFramerComponent } from './app-framer/app-framer.component';
import { FeatureLayoutComponent } from './feature-layout/feature-layout.component';
import { AutoGridDirective } from './directives/auto-grid.directive';


@NgModule({
  imports: [CommonModule, SharedUiMatDepsModule],
  declarations: [
    DashboardCardComponent,
    FavoriteCardComponent,
    AppFramerComponent,
    FeatureLayoutComponent,
    AutoGridDirective,
  ],
  exports: [
    DashboardCardComponent,
    FavoriteCardComponent,
    AppFramerComponent,
    FeatureLayoutComponent,
    AutoGridDirective
  ],
})
export class SharedUiComponentKitModule {}
