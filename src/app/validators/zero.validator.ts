import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function forbiddenZipcodeStartValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;
    
    // if empty
    if (!value) return null;
    console.log(forbiddenZipcodeStartValidator)
    
    // Check if the number starts with 0
    return value.toString().startsWith('0') 
      ? { forbiddenZipcodeStart: true }
      : null;
  };
}

// export function forbiddenZipcodeStartValidator(zero: RegExp): ValidatorFn {
//   return (control: AbstractControl): ValidationErrors | null => {
//     const forbidden = zero.test(control.value);
//     return forbidden ? { forbiddenZpcodeStart: { value: control.value } } : null;
//   };
// }