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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
