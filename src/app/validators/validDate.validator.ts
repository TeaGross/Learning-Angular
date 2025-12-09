import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function dateValidator(): ValidatorFn {
  const rxIsoDash = /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$/;      // 2025-12-04
  const rxIsoSlash = /^\d{4}\/(0[1-9]|1[0-2])\/(0[1-9]|[12]\d|3[01])$/;   // 2025/12/04
  const rxCompact8 = /^\d{4}(0[1-9]|1[0-2])(0[1-9]|[12]\d|3[01])$/;       // 20251204
  const rxCompact6 = /^\d{2}(0[1-9]|1[0-2])(0[1-9]|[12]\d|3[01])$/;       // 251204

  return (control: AbstractControl): ValidationErrors | null => {
    const value = control?.value;
    if (value == null || value === '') return null;

    if (Array.isArray(value) && value.length > 1) {
      console.log('fler datum')
      return { multipleDate: true };
    }

    const dateValue = Array.isArray(value) ? value[0] : value;
    if (dateValue == null || dateValue === '') return null;

    let date: Date;
    if (dateValue instanceof Date) {
      date = dateValue;
      console.log('instanceofDate')
    } else {
      const str = String(dateValue).trim();
      let yyyy: number, mm: number, dd: number;

      if (rxIsoDash.test(str)) {
        const [y, m, d] = str.split('-');
        yyyy = Number(y); mm = Number(m); dd = Number(d);
        date = new Date(yyyy, mm - 1, dd);
        console.log('valid-format -')
      } else if (rxIsoSlash.test(str)) {
        const [y, m, d] = str.split('/');
        yyyy = Number(y); mm = Number(m); dd = Number(d);
        date = new Date(yyyy, mm - 1, dd);
        console.log('valid-format /')
      } else if (rxCompact8.test(str)) {
        yyyy = Number(str.slice(0, 4));
        mm = Number(str.slice(4, 6));
        dd = Number(str.slice(6, 8));
        date = new Date(yyyy, mm - 1, dd);
        console.log('valid-format ÅÅÅÅMMDD')
      } else if (rxCompact6.test(str)) {
        yyyy = 2000 + Number(str.slice(0, 2));
        mm = Number(str.slice(2, 4));
        dd = Number(str.slice(4, 6));
        date = new Date(yyyy, mm - 1, dd);
        console.log('valid-format ÅÅMMDD')
      } else {
        console.log('invalid-format')
        return { invalidDate: true };
      }

      // // Verifiera att Date-komponenter matchar (hindrar 2025-02-30 osv)
      // if (date.getFullYear() !== yyyy || date.getMonth() !== (mm - 1) || date.getDate() !== dd) {
      //    console.log('invalid getfullYear')
      //   return { invalidDate: true };
      // }
    }
    console.log(date)
    return isNaN(date.getTime()) ? { invalidDate: true } : null;
  };
}