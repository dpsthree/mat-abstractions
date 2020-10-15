import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { DragDropModule } from '@angular/cdk/drag-drop';

const deps = [DragDropModule, MatButtonModule, MatCardModule];

@NgModule({
  imports: [CommonModule, ...deps],
  exports: deps,
})
export class SharedUiMatDepsModule {}
