import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function ejEndastMellanslagValidator() : ValidatorFn {
    return (control: AbstractControl) : ValidationErrors | null => {
        // skapa variabel för värdet
        const value = control.value;

        // felhantering
        if (value === null || value === "") return null;

        // Om resultatet efter trim är tomt = bara mellanslag i strängen
        const endastMellanslag = value.trim().length === 0;

        if(endastMellanslag) {
            return {endastMellanslag: true};
        }
        return null;
    }
}