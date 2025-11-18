import { AbstractControl, ControlContainer, ValidationErrors, ValidatorFn } from "@angular/forms";

export function phoneNumberValidator(): ValidatorFn {

    return (control: AbstractControl) : ValidationErrors | null => {
        const value = control.value;

        if (!value) return null;

        // ta bort - och mellanslag, trim
        const endastNummer = value.replace(/[^0-9]/g, '');

        // Kolla att nummer är 10 siffror
        if(endastNummer.length === 10) {
            return null;
        }
        // Returnera true om nummer är 10 siffror
        return {phoneNumberInvalid: true};

    }
}