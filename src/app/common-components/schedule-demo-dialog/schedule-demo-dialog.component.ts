import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from "@angular/forms";
import { MatNativeDateModule } from "@angular/material/core";
import { NgxIntlTelInputModule } from "ngx-intl-tel-input";
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatButtonModule } from "@angular/material/button";
import { MatSelectModule } from '@angular/material/select';


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
    MatNativeDateModule,
    NgxIntlTelInputModule,
    ReactiveFormsModule
  ]

})
export class ScheduleDemoDialogComponent {
  step = 1;
  minDate = new Date();
  selectedTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

  timeZones = [
    'UTC', 'America/New_York', 'Europe/London', 'Asia/Kolkata',
  ];

  timeSlots = [
    '12:00 AM', '12:30 AM', '1:00 AM', '1:30 AM', '2:00 AM', '2:30 AM',
  ];

  demoForm: FormGroup;

  serviceCategories = ['Category 1', 'Category 2', 'Category 3'];
  services = ['Service 1', 'Service 2', 'Service 3'];

  constructor(private fb: FormBuilder) {
    this.demoForm = this.fb.group({
      date: [null, Validators.required],
      time: [null, Validators.required],
      timeZone: [this.selectedTimeZone, Validators.required],
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: [null, Validators.required],
      serviceCategory: ['', Validators.required],
      service: ['', Validators.required],
      message: ['']
    });
  }

  nextStep() {
    this.step = 2;
  }

  scheduleEvent() {
    if (this.demoForm.valid) {
      console.log(this.demoForm.value);
    } else {
      this.demoForm.markAllAsTouched();
    }
  }
}
