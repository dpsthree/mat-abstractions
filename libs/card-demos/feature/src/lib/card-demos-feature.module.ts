import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardDemosComponent } from './card-demos/card-demos.component';
import { RouterModule, Routes } from '@angular/router';

import { SharedUiMatDepsModule } from '@mat-abstractions/shared/ui-mat-deps';
import { SharedUiWijmoDepsModule } from '@mat-abstractions/shared/ui-wijmo-deps';
import { SharedUiComponentKitModule } from '@mat-abstractions/shared/ui-component-kit';

const routes: Routes = [{ path: '', component: CardDemosComponent }];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedUiMatDepsModule,
    SharedUiComponentKitModule,
    SharedUiWijmoDepsModule,
  ],
  declarations: [CardDemosComponent],
})
export class CardDemosFeatureModule {}
