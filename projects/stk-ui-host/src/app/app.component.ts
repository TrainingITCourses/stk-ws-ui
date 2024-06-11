import { Component } from '@angular/core';
//import { LocationComponent } from '../../../stk-ui/src/public-api';
import { LocationComponent } from 'stk-ui';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [LocationComponent],
  template: ` <stk-ui-location value="Lisboa" /> `,
  styles: [],
})
export class AppComponent {
  title = 'stk-ui-host';
}
