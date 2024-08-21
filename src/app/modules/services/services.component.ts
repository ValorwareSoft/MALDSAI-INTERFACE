import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FaqComponent } from "../../common-components/faq/faq.component";
import { Router } from '@angular/router';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, FaqComponent],
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {

  constructor(private router: Router) { }


  ngOnInit(): void {
    const learnMoreButtons = document.querySelectorAll('.learn-more-button');
    const aiServicesSection = document.getElementById('aiServicesSection');

    if (aiServicesSection) {
      learnMoreButtons.forEach(button => {
        button.addEventListener('click', () => {
          const offset = 5 * parseFloat(getComputedStyle(document.documentElement).fontSize); // Calculate 5rem in pixels
          const sectionPosition = aiServicesSection.getBoundingClientRect().top + window.scrollY - offset;

          window.scrollTo({
            top: sectionPosition,
            behavior: 'smooth'
          });
        });
      });
    }
  }

  cards = [
    {
      title: 'Innovative & Impactful Projects',
      content: 'Engage in groundbreaking AI projects that redefine industries Engage in groundbreaking AI projects that redefine industries ',
      routeName: 'innovative-and-impactful-projects'
    },
    {
      title: 'Continuous Learning & Growth',
      content: 'Engage in groundbreaking AI projects that redefine industries Engage in groundbreaking AI projects that redefine industries',
      routeName: 'continous-learning-and-growth'
    },
    {
      title: 'Continuous Learning & Growth',
      content: 'Engage in groundbreaking AI projects that redefine industries Engage in groundbreaking AI projects that redefine industries',
      routeName: 'continous-learning-and-growth'
    },
    {
      title: 'Continuous Learning & Growth',
      content: 'Engage in groundbreaking AI projects that redefine industries Engage in groundbreaking AI projects that redefine industries',
      routeName: 'continous-learning-and-growth'
    },
    {
      title: 'Continuous Learning & Growth',
      content: 'Engage in groundbreaking AI projects that redefine industries Engage in groundbreaking AI projects that redefine industries',
      routeName: 'continous-learning-and-growth'
    },
    {
      title: 'Continuous Learning & Growth',
      content: 'Engage in groundbreaking AI projects that redefine industries Engage in groundbreaking AI projects that redefine industries',
      routeName: 'continous-learning-and-growth'
    },
    {
      title: 'Continuous Learning & Growth',
      content: 'Engage in groundbreaking AI projects that redefine industries Engage in groundbreaking AI projects that redefine industries',
      routeName: 'continous-learning-and-growth'
    },
    {
      title: 'Continuous Learning & Growth',
      content: 'Engage in groundbreaking AI projects that redefine industries Engage in groundbreaking AI projects that redefine industries',
      routeName: 'continous-learning-and-growth'
    },
    {
      title: 'Continuous Learning & Growth',
      content: 'Engage in groundbreaking AI projects that redefine industries Engage in groundbreaking AI projects that redefine industries',
      routeName: 'continous-learning-and-growth'
    }, {
      title: 'Continuous Learning & Growth',
      content: 'Invest in your professional development with ongoing learning ',
      routeName: 'continous-learning-and-growth'
    },

  ];





  goToServiceDetails(routeName: string): void {
    this.router.navigate([`/services/${routeName}`]);
  }
}
