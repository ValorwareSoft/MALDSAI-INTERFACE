import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CountryISO, NgxIntlTelInputModule, PhoneNumberFormat, SearchCountryField } from 'ngx-intl-tel-input';

@Component({
  selector: 'app-schedule-demo-dialog',
  standalone: true,
  imports: [CommonModule, MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatDatepickerModule,
    NgxIntlTelInputModule,
    MatNativeDateModule, ReactiveFormsModule],
  templateUrl: './schedule-demo-dialog.component.html',
  styleUrls: ['./schedule-demo-dialog.component.scss']
})
export class ScheduleDemoDialogComponent {

  scheduleDemoForm: FormGroup;
  categories = ['Healthcare', 'Supply Chain', 'Customer Service', 'Agriculture', /* other categories */];
  services = ['AI Solutions', 'Custom Software', 'Expert Consultation', /* other services */];
  placeholder: string = 'Enter Phone Number';

  separateDialCode = false;
  SearchCountryField = SearchCountryField;
  CountryISO = CountryISO;
  PhoneNumberFormat = PhoneNumberFormat;
  preferredCountries: CountryISO[] = [CountryISO.India, CountryISO.UnitedKingdom];

  changePreferredCountries() {
    this.preferredCountries = [CountryISO.India, CountryISO.Canada];
  }

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<ScheduleDemoDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.scheduleDemoForm = this.fb.group({
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

  }




  onCancel(): void {
    this.dialogRef.close();
  }



  sendConfirmationEmail(formData: any) {
    const confirmationEmail = {
      to: formData.email,
      subject: 'Your Demo Schedule Details',
      body: `Thank you for scheduling a demo with MalDsAI Technologies. 
            Here are your details:
            Name: ${formData.name}
            Email: ${formData.email}
            Phone: ${formData.phone}
            Category Type: ${formData.categoryType}
            Service Type: ${formData.serviceType}
            Date: ${formData.date}
            Notes: ${formData.notes || 'None'}
            If there are any updates to the date and time, we will notify you. 
            For support, please contact support@maldsai.com.`
    };


  }

}
