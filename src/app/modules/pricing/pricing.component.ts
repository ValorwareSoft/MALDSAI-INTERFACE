import { Component, AfterViewInit, HostListener, ElementRef, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pricing',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.scss']
})
export class PricingComponent implements AfterViewInit {
  constructor(private renderer: Renderer2, private el: ElementRef) { }

  ngAfterViewInit() {
    this.adjustStarsHeight();
  }

  @HostListener('window:resize')
  onResize() {
    this.adjustStarsHeight();
  }

  adjustStarsHeight() {
    const pricingDiv = this.el.nativeElement.querySelector('.service-div');
    const starsContainer = this.el.nativeElement.querySelector('#CODEVEMBER');
    if (pricingDiv && starsContainer) {
      this.renderer.setStyle(starsContainer, 'height', `${pricingDiv.offsetHeight}px`);
    }
  }
}