import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function fornamnValidator(): ValidatorFn {
    const regex = /^[A-Za-zÅÄÖåäö\-]+$/;
    return (control: AbstractControl): ValidationErrors | null => {
       const value = control.value;
       if (value === null || value === '') return null;

       return regex.test(value) ? null : { fornamnInvalid: true };
    };
}