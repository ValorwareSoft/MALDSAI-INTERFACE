import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-terms-and-conditions',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './terms-and-conditions.component.html',
  styleUrls: ['./terms-and-conditions.component.scss']
})
export class TermsAndConditionsComponent implements AfterViewInit {
  @ViewChild('scrollTarget', { static: false }) scrollTarget: ElementRef | undefined;

  constructor(private elRef: ElementRef) {}

  ngAfterViewInit(): void {
   
    const scrollElement = this.elRef.nativeElement.querySelector('.scroll-target');
    if (scrollElement) {
      scrollElement.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
