import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { FaqComponent } from "../../common-components/faq/faq.component";

@Component({
  selector: 'app-service-sub-details',
  standalone: true,
  imports: [CommonModule, FaqComponent],
  templateUrl: './service-sub-details.component.html',
  styleUrls: ['./service-sub-details.component.scss']
})
export class ServiceSubDetailsComponent implements OnInit {
  routeName: any  ;
  validRoutes = ['innovative-and-impactful-projects', 'continous-learning-and-growth'];

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.routeName = params.get('routeName');
      if (!this.validRoutes.includes(this.routeName)) {
        this.router.navigate(['/services']); 
      }
    });
  }

  review = [
    {
      title: 'Innovative & Impactful Projects',
      content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt a ipsum, quas, repellendus libero delectus tempora, perspiciatis ullam eos soluta consequuntur in error inventore. Quo laboriosam porro aliquam nisi ullam.'
    },
    {
      title: 'Innovative & Impactful Projects',
      content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt a ipsum, quas, repellendus libero delectus tempora, perspiciatis ullam eos soluta consequuntur in error inventore. Quo laboriosam porro aliquam nisi ullam.'
    },
    {
      title: 'Innovative & Impactful Projects',
      content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt a ipsum, quas, repellendus libero delectus tempora, perspiciatis ullam eos soluta consequuntur in error inventore. Quo laboriosam porro aliquam nisi ullam.'
    },
  ];
}
