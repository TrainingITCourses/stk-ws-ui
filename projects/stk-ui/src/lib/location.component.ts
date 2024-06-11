import {
  ChangeDetectionStrategy,
  Component,
  InputSignal,
  input,
} from '@angular/core';

/**
 * Component to display a location
 * @description Displays the location value.
 * @param `value` to display as a location.
 */
@Component({
  selector: 'stk-ui-location',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <span>
      📍At <strong>{{ value() }}</strong>
    </span>
  `,
})
export class LocationComponent {
  // * Input signal division

  /** Location value */
  value: InputSignal<string> = input.required<string>();
}
