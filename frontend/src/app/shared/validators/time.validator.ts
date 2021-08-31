import { Directive } from '@angular/core';
import {
  AbstractControl,
  NG_VALIDATORS,
  ValidationErrors,
  Validator
} from '@angular/forms';
import { NgbTimeStruct } from '@ng-bootstrap/ng-bootstrap';

@Directive({
  selector: '[timeValidator]',
  providers: [
    { provide: NG_VALIDATORS, useExisting: TimeValidator, multi: true },
  ],
})
export class TimeValidator implements Validator {
  validate(control: AbstractControl): ValidationErrors | null {
    const time = control.value;

    if (!time) return null;

    const hour = time.hour;

    if (hour < 8 || hour > 17) {
      return { invalidHours: true };
    } else return null;
  }
}
