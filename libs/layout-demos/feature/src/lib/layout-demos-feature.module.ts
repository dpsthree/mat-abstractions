import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { SharedUiComponentKitModule } from '@mat-abstractions/shared/ui-component-kit';

import { LayoutDemosComponent } from './layout-demos/layout-demos.component';
import { SharedUiMatDepsModule } from '@mat-abstractions/shared/ui-mat-deps';

const routes: Routes = [{ path: '', component: LayoutDemosComponent }];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedUiMatDepsModule,
    SharedUiComponentKitModule,
  ],
  declarations: [LayoutDemosComponent],
})
export class LayoutDemosFeatureModule {}
