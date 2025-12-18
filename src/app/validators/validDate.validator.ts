import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { patterns } from '../utils/patterns';
import { parseDateValue } from '../utils/date.utils';

export function dateValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control?.value;
    if (value == null || value === '') return null;

    if (Array.isArray(value) && value.length > 1) {
      return { multipleDate: true };
    }

    const dateValue = Array.isArray(value) ? value[0] : value;
    if (dateValue == null || dateValue === '') return null;

    if (typeof dateValue === 'string') {
      const matched =
        patterns.dateDash.test(dateValue) ||
        patterns.dateSlash.test(dateValue) ||
        patterns.dateCompact8.test(dateValue) ||
        patterns.dateCompact6.test(dateValue);

      if (!matched) return { invalidDate: true };
    }

    const date: Date = parseDateValue(dateValue);

    return isNaN(date.getTime()) ? { invalidDate: true } : null;
  };
}



// // Verifiera att Date-komponenter matchar (hindrar 2025-02-30 osv)
// if (date.getFullYear() !== yyyy || date.getMonth() !== (mm - 1) || date.getDate() !== dd) {
//    console.log('invalid getfullYear')
//   return { invalidDate: true };
// }