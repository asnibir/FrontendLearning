import { AbstractControl, ValidationErrors } from "@angular/forms";

export class UsernameValidators {
    static cannotContainSpace(control: AbstractControl): ValidationErrors | null {
        if ((control.value as string).indexOf(' ') >= 0)
            return { cannotContainSpace: true };
        return null;
    }

    // Assume, if the username is nibir then the username is taken otherwise not
    static shouldBeUnique(control: AbstractControl): Promise<ValidationErrors | null> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log('ok');
                if (control.value === 'nibir')
                    resolve({ shouldBeUnique: true });
                else
                    resolve(null);
            }, 3000);
        });

    }
}