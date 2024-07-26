import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { FaqComponent } from "../../common-components/faq/faq.component";

@Component({
  selector: 'app-service-details',
  standalone: true,
  imports: [CommonModule, FaqComponent],
  templateUrl: './service-details.component.html',
  styleUrls: ['./service-details.component.scss']
})
export class ServiceDetailsComponent implements OnInit {
  routeName: any;
  validRoutes = ['innovative-and-impactful-projects', 'continous-learning-and-growth'];

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.routeName = params.get('routeName');
      if (!this.validRoutes.includes(this.routeName)) {
        this.router.navigate(['/services']);
      }
    });
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

  ];


  goToServiceDetails(routeName: string): void {
    this.router.navigate([`/services/${routeName}/${routeName}`]);
  }

}
