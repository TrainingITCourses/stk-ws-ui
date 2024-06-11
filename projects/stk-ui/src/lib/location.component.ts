import {
  ChangeDetectionStrategy,
  Component,
  InputSignal,
  input,
} from '@angular/core';

/**
 * Component to display the location of an activity.
 */
@Component({
  selector: 'stk-ui-location',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <span>
      📍at <strong>{{ value() }}</strong>
    </span>
  `,
})
export class LocationComponent {
  // * Input signal division

  /** Location value */
  value: InputSignal<string> = input.required<string>();
  // @Input({ required: true }) value: string = '';
}
