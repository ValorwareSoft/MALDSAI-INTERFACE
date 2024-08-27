import { Component, ElementRef, HostListener, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ScheduleDemoDialogComponent } from '../schedule-demo-dialog/schedule-demo-dialog.component';

@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
})
export class BannerComponent {
  constructor(
    private renderer: Renderer2,
    private el: ElementRef,
    private dialog: MatDialog
  ) { }

  ngAfterViewInit() {
    this.adjustStarsHeight();
  }

  @HostListener('window:resize')
  onResize() {
    this.adjustStarsHeight();
  }

  adjustStarsHeight() {
    const pricingDiv = this.el.nativeElement.querySelector('.banner-div');
    const starsContainer = this.el.nativeElement.querySelector('#CODEVEMBER');
    if (pricingDiv && starsContainer) {
      this.renderer.setStyle(
        starsContainer,
        'height',
        `${pricingDiv.offsetHeight}px`
      );
    }
  }

  openScheduleDemoDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = false;
    dialogConfig.disableClose = true;
    this.dialog.open(ScheduleDemoDialogComponent, dialogConfig);
  }
}
