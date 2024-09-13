import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-privacy-policy',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './privacy-policy.component.html',
  styleUrls: ['./privacy-policy.component.scss']
})
export class PrivacyPolicyComponent implements AfterViewInit {
  @ViewChild('scrollTarget', { static: false }) scrollTarget: ElementRef | undefined;

  constructor(private elRef: ElementRef) {}

  ngAfterViewInit(): void {
    const scrollElement = this.elRef.nativeElement.querySelector('.scroll-target');
    if (scrollElement) {
      scrollElement.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
