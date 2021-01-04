import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SharedUiMatDepsModule } from '@mat-abstractions/shared/ui-mat-deps';
import { SharedUiComponentKitModule } from '@mat-abstractions/shared/ui-component-kit';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedUiMatDepsModule,
    SharedUiComponentKitModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
