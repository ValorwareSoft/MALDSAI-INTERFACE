import { Component, AfterViewInit, HostListener, ElementRef, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScheduleDemoDialogComponent } from 'src/app/common-components/schedule-demo-dialog/schedule-demo-dialog.component';
import { MatDialog, MatDialogConfig, MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-pricing',
  standalone: true,
  imports: [CommonModule, MatDialogModule],
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.scss']
})
export class PricingComponent implements AfterViewInit {
  constructor(private renderer: Renderer2, private el: ElementRef, private dialog: MatDialog) { }

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

  
  openScheduleDemoDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = false;
    dialogConfig.disableClose = true;
    this.dialog.open(ScheduleDemoDialogComponent, dialogConfig);
  }
}