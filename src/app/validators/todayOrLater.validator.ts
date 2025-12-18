import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { dateValidator } from './validDate.validator';
import { parseDateValue } from '../utils/date.utils';

export function dateTodayOrLaterValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
     if (!control || !control.value) {
      return null;
    }

    const invalidDate = dateValidator()(control) !== null;

    // Dont run this validation logic if it is an invalid date
    if (invalidDate) {
      return null;
    }

    const date: Date = parseDateValue(control.value);

    const today = new Date();
    const formattedDateUTC = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
    const formattedTodayUTC = new Date(Date.UTC(today.getFullYear(), today.getMonth(), today.getDate()));

    if (formattedDateUTC >= formattedTodayUTC) {
      return null;
    } else {
      return { InvalidDateTodayOrLater: true };
    }
  }
}
