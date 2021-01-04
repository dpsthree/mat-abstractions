import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'cards', pathMatch: 'full' },
  {
    path: 'cards',
    loadChildren: () =>
      import('@mat-abstractions/card-demos/feature').then(
        (m) => m.CardDemosFeatureModule
      ),
  },
  {
    path: 'layouts',
    loadChildren: () =>
      import('@mat-abstractions/layout-demos/feature').then(
        (m) => m.LayoutDemosFeatureModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
