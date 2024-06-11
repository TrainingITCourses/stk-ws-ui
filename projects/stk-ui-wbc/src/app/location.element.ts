import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { LocationComponent } from '../../../stk-ui/src/public-api';

@Component({
  standalone: true,
  imports: [LocationComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<stk-ui-location [value]="place"></stk-ui-location>`,
})
export class LocationElement {
  @Input() place: string = '';
}
