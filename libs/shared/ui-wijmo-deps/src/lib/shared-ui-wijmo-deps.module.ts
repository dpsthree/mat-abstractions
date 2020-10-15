import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WjGridModule } from '@grapecity/wijmo.angular2.grid';

const deps = [WjGridModule];

@NgModule({
  imports: [CommonModule, ...deps],
  exports: deps,
})
export class SharedUiWijmoDepsModule {}
