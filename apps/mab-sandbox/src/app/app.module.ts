import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SharedUiMatDepsModule } from '@mat-abstractions/shared/ui-mat-deps';
import { SharedUiWijmoDepsModule } from '@mat-abstractions/shared/ui-wijmo-deps';
import { SharedUiComponentKitModule } from '@mat-abstractions/shared/ui-component-kit';


import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedUiMatDepsModule,
    SharedUiComponentKitModule,
    SharedUiWijmoDepsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
