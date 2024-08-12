import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-schedule-demo-dialog',
  standalone: true,
  imports: [CommonModule, MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule, ReactiveFormsModule],
  templateUrl: './schedule-demo-dialog.component.html',
  styleUrls: ['./schedule-demo-dialog.component.scss']
})
export class ScheduleDemoDialogComponent {

  scheduleDemoForm: FormGroup;
  categories = ['Healthcare', 'Supply Chain', 'Customer Service', 'Agriculture', /* other categories */];
  services = ['AI Solutions', 'Custom Software', 'Expert Consultation', /* other services */];

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<ScheduleDemoDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.scheduleDemoForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required]],
      categoryType: ['', [Validators.required]],
      serviceType: ['', [Validators.required]],
      notes: [''],
      date: ['', [Validators.required]],
    });
  }

  onCancel(): void {
    this.dialogRef.close();
  }

  onSubmit(): void {
    if (this.scheduleDemoForm.valid) {
      const formData = this.scheduleDemoForm.value;

      // Send email

      alert('Thank you! We will get back to you.');
      this.dialogRef.close();
      // Send confirmation email to the user
      this.sendConfirmationEmail(formData);

    }
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
