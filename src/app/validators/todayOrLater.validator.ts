import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { dateValidator } from './validDate.validator';

export function dateTodayOrLaterValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const dateDash = /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$/; // 2025-12-04
    const dateSlash = /^\d{4}\/(0[1-9]|1[0-2])\/(0[1-9]|[12]\d|3[01])$/; // 2025/12/04
    const dateCompact8 = /^\d{4}(0[1-9]|1[0-2])(0[1-9]|[12]\d|3[01])$/; // 20251204
    const dateCompact6 = /^\d{2}(0[1-9]|1[0-2])(0[1-9]|[12]\d|3[01])$/; // 251204
    if (!control || !control.value) {
      return null;
    }

    const invalidDate = dateValidator()(control) !== null;

    // Dont run this validation logic if it is an invalid date
    if (invalidDate) {
      return null;
    }

    const value = control.value;
    let date: Date;

    if (value instanceof Date) {
      date = value;
    } else {
      let yyyy: number, mm: number, dd: number;

      if (dateDash.test(value)) {
        const [y, m, d] = value.split('-');
        yyyy = Number(y);
        mm = Number(m);
        dd = Number(d);
        date = new Date(yyyy, mm - 1, dd);
      } else if (dateSlash.test(value)) {
        const [y, m, d] = value.split('/');
        yyyy = Number(y);
        mm = Number(m);
        dd = Number(d);
        date = new Date(yyyy, mm - 1, dd);
      } else if (dateCompact8.test(value)) {
        yyyy = Number(value.slice(0, 4));
        mm = Number(value.slice(4, 6));
        dd = Number(value.slice(6, 8));
        date = new Date(yyyy, mm - 1, dd);
      } else if (dateCompact6.test(value)) {
        yyyy = 2000 + Number(value.slice(0, 2));
        mm = Number(value.slice(2, 4));
        dd = Number(value.slice(4, 6));
        date = new Date(yyyy, mm - 1, dd);
      } else {
        date = new Date(value);
      }
    }

    const today = new Date();
    const formattedDate = new Date(date.getFullYear(), date.getMonth(), date.getDate());
    const formattedToday = new Date(today.getFullYear(), today.getMonth(), today.getDate());

    if (formattedDate >= formattedToday) {
      return null;
    } else {
      return { InvalidDateTodayOrLater: true };
    }
  }
}