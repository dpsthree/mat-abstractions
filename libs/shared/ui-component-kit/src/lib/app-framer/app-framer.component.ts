import { Component, Input } from '@angular/core';

@Component({
  selector: 'mab-app-framer',
  templateUrl: './app-framer.component.html',
  styleUrls: ['./app-framer.component.scss'],
})
export class AppFramerComponent {
  @Input('appName') appName = '';

  sidepinMode = 'over';
  customTheme = true;

  toggleSidepinMode() {
    if (this.sidepinMode === 'over') {
      this.sidepinMode = 'side';
    } else {
      this.sidepinMode = 'over';
    }
  }
}
