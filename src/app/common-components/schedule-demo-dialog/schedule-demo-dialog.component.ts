import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormGroup,
  FormBuilder,
  Validators,
  ReactiveFormsModule,
  AbstractControl,
} from '@angular/forms';
import { SearchCountryField, CountryISO, PhoneNumberFormat, NgxIntlTelInputModule } from 'ngx-intl-tel-input';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-schedule-demo-dialog',
  standalone: true,
  templateUrl: './schedule-demo-dialog.component.html',
  styleUrls: ['./schedule-demo-dialog.component.scss'],
  imports: [CommonModule, ReactiveFormsModule, NgxIntlTelInputModule, RouterModule]

})
export class ScheduleDemoDialogComponent {

  showDetails: boolean = false;
  customCodeForm: FormGroup;
  placeholder: string = 'Enter Phone Number';

  separateDialCode = false;
  SearchCountryField = SearchCountryField;
  CountryISO = CountryISO;
  PhoneNumberFormat = PhoneNumberFormat;
  preferredCountries: CountryISO[] = [CountryISO.India, CountryISO.UnitedKingdom];

  changePreferredCountries() {
    this.preferredCountries = [CountryISO.India, CountryISO.Canada];
  }

  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.customCodeForm = this.formBuilder.group({
      firstName: [
        '',
        [
          Validators.required,
          this.minLengthWithSpacesValidator(2),
          Validators.maxLength(30),
          Validators.pattern('^[a-zA-Z ]+$'),
        ],
      ],
      lastName: [
        '',
        [
          Validators.required,
          this.minLengthWithSpacesValidator(2),
          Validators.maxLength(30),
          Validators.pattern('^[a-zA-Z ]+$'),
        ],
      ],
      emailAddress: [
        '',
        [
          Validators.required,
          Validators.pattern(
            '^\\w+([.-]?\\w+)*@\\w+([.-]?\\w+)*(\\.\\w{2,3})+$'
          ),
        ],
      ],
      phoneNumber: [
        '',
        [Validators.required],
      ],
      message: [
        '',
        [
          Validators.required,
          this.minLengthWithSpacesValidator(20),
          Validators.maxLength(1000),
        ],
      ],
    });
  }

  phoneNumberValidator() {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const value = control.value;
      if (value && typeof value === 'object' && value.hasOwnProperty('number')) {
        const isValid = value.isValid;
        return isValid ? null : { invalidPhoneNumber: true };
      }
      return { invalidPhoneNumber: true };
    };
  }


  minLengthWithSpacesValidator(minLength: number) {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const value: string = control.value || '';
      const spaceCount: number = (value.match(/\s/g) || []).length;
      const actualLength: number = value.length - spaceCount;
      return actualLength < minLength ? { minlength: true } : null;
    };
  }



  onSubmit(): void {
    if (this.customCodeForm.valid) {
      this.router.navigate(['/popup/#', 'success']);
    } else {
      this.customCodeForm.markAllAsTouched();
      this.router.navigate(['/popup/#', 'failed']);
    }
  }


  toggleDetails(): void {
    this.showDetails = !this.showDetails;
  }


}
