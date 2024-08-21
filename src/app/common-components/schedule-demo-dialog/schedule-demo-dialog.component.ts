import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from "@angular/forms";
import { MatNativeDateModule } from "@angular/material/core";
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from "@angular/material/button";
import { MatSelectModule } from '@angular/material/select';
import { CountryISO, NgxIntlTelInputModule, PhoneNumberFormat, SearchCountryField } from "ngx-intl-tel-input";
import { MatDialogRef } from "@angular/material/dialog";
import { ErrorMessage } from "src/app/Constants/ErrorMessages";

@Component({
  selector: 'app-schedule-demo-dialog',
  standalone: true,
  templateUrl: './schedule-demo-dialog.component.html',
  styleUrls: ['./schedule-demo-dialog.component.scss'],
  imports: [
    CommonModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    NgxIntlTelInputModule,
    MatNativeDateModule,
    ReactiveFormsModule
  ]
})
export class ScheduleDemoDialogComponent {
  placeholder: string = 'Enter Phone Number';
  separateDialCode = false;
  SearchCountryField = SearchCountryField;
  CountryISO = CountryISO;
  PhoneNumberFormat = PhoneNumberFormat;
  preferredCountries: CountryISO[] = [CountryISO.India, CountryISO.UnitedKingdom];


  
  step = 1;
  minDate = new Date();
  selectedTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

  timeZones = ['UTC', 'America/New_York', 'Europe/London', 'Asia/Kolkata'];
  timeSlots = ['12:00 AM', '12:30 AM', '1:00 AM', '1:30 AM', '2:00 AM', '2:30 AM'];

  demoForm: FormGroup;
  serviceCategories = ['Category 1', 'Category 2', 'Category 3'];
  services = ['Service 1', 'Service 2', 'Service 3'];

  constructor(private fb: FormBuilder, private dialogRef: MatDialogRef<ScheduleDemoDialogComponent>) {
    this.demoForm = this.fb.group({
      date: [null],
      time: [null],
      timeZone: [this.selectedTimeZone],
      name: ['', Validators.required],
      compnayName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', [Validators.required]],
      serviceCategory: [''],
      service: [''],
      message: ['']
    });
  }


  getErrorMessage(controlName: string) {
    const control = this.demoForm.get(controlName);

    if (!control) {
      return ErrorMessage.CONTROL_NOT_FOUND;
    }

    if (control.touched && control.invalid) {
      if (control.hasError('required')) {
        return ErrorMessage.FIELD_IS_REQUIRED;
      }

      if(control.hasError('email')){
        return ErrorMessage.NOT_A_VALID_EMAIL;
      }
    }

    return '';
  }

  nextStep() {
    if (this.demoForm.valid) {
      this.step = 2;
    } else {
      this.demoForm.markAllAsTouched();
    }
    
  }

  previousStep() {
    this.step = 1;
  }

  close() {
    this.dialogRef.close(0);
  }

  scheduleEvent() {
    if (this.demoForm.valid) {
      console.log(this.demoForm.value, "DATA");
    } else {
      this.demoForm.markAllAsTouched();
    }
  }
}
