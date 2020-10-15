import { Component } from '@angular/core';

@Component({
  selector: 'mab-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  sidepinMode = 'over';

  toggleSidepinMode() {
    if (this.sidepinMode === 'over') {
      this.sidepinMode = 'side';
    } else {
      this.sidepinMode = 'over';
    }
  }
}
