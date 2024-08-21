import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  subscriptionForm: FormGroup;


  constructor(private router: Router, private fb: FormBuilder) {
    this.subscriptionForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    });
   }

  navigate(link: string): void {
    this.router.navigate([`/${link}`]);
  }

  onSubmit() {
    if (this.subscriptionForm.valid) {
      console.log('Form Submitted', this.subscriptionForm.value);
      // Add your subscription logic here
    }
  }

}
