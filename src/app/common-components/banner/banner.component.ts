import { Component, ElementRef, HostListener, Input, OnInit, Renderer2 } from '@angular/core';
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
export class BannerComponent implements OnInit {
  constructor(
    private renderer: Renderer2,
    private el: ElementRef,
    private dialog: MatDialog
  ) { }

  @Input() title: string = '';

  subtitle: string = '';
  imageUrl: string = '';

  ngAfterViewInit() {
    this.adjustStarsHeight();
  }

  ngOnInit() {
    this.setBannerContent(this.title);
  }

  setBannerContent(title: string) {
    switch (title) {
      case 'About MalDsAi Laboratory':
        this.subtitle = 'Explore how MalDsAi Laboratory is pushing the limits of data science and AI. Our focus on innovation and excellence empowers businesses to achieve more. Join us as we merge data with intelligence to unlock new possibilities.';
        this.imageUrl = '../../../assets/images/aboutus.png';
        break;
      case 'Our Projects':
        this.subtitle = 'Dive into our portfolio of innovative AI projects. From predictive analytics to intelligent automation, see how our solutions are shaping the future and driving success across various industries.';
        this.imageUrl = '../../../assets/images/projects.png';
        break;

    }
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
