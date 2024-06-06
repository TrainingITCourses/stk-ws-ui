import { Component } from '@angular/core';
import { LocationComponent } from 'stk-ui';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [LocationComponent],
  template: ` <stk-ui-location value="Madrid" /> `,
  styles: [],
})
export class AppComponent {
  title = 'stk-ui-host';
}
