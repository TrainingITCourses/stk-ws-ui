import { DatePipe } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  InjectionToken,
  InputSignal,
  inject,
  input,
} from '@angular/core';

export const DATE_FORMAT = new InjectionToken<string>('DATE_FORMAT', {
  providedIn: 'root',
  factory: () => 'mediumDate',
});

/**
 * Presentation component for displaying a date value.
 * @description Displays the date value in a configurable date format.
 * @params `value` to display as a formatted date.
 * @requires `DATE_FORMAT` to configure the date format.
 * @requires `DatePipe` to format the value.
 */
@Component({
  selector: 'stk-ui-date',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [DatePipe],
  template: `
    <span>
      📅 On <strong>{{ value() | date : dateFormat }}</strong>
    </span>
  `,
})
export class DateComponent {
  // * Input signal division

  /** Date to be displayed */
  value: InputSignal<Date> = input.required<Date>();

  // * Properties division

  dateFormat: string = inject(DATE_FORMAT);
}
