import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-careers',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './careers.component.html',
  styleUrls: ['./careers.component.scss']
})
export class CareersComponent {

  cards = [
    {
      title: 'Innovative & Impactful Projects',
      content: 'Engage in groundbreaking AI projects that redefine industries and drive meaningful change. From enhancing autonomous systems to advancing natural language processing, our projects set new benchmarks in innovation.'
    },
    {
      title: 'Continuous Learning & Growth',
      content: 'Invest in your professional development with ongoing learning opportunities tailored to your career aspirations. Whether through mentorship programs, skill-building workshops, or access to the latest Laboratory, we empower you to evolve and excel.'
    },
    {
      title: 'Challenging & Rewarding Work',
      content: 'Immerse yourself in work that stimulates and rewards your intellect. Tackle complex challenges that demand creativity and strategic thinking, and see your contributions directly impact our global initiatives.'
    },
    {
      title: 'Supportive Environment',
      content: 'Thrive in a collaborative and inclusive environment where your voice matters. We foster a culture of respect, teamwork, and transparency, ensuring everyone\'s perspectives are valued and contribute to our collective success.'
    }
  ];


  jobOpenings: any = [];

  constructor() {
    this.jobOpenings = [
      {
        jobCategory: "Design Job Openings",
        jobs: [
          {
            jobid: 1,
            jobTitle: "UX Designer",
            jobType: "Intern",
            summary: "Engage in groundbreaking AI projects that redefine industries and drive meaningful change. From enhancing autonomous systems to advancing natural language processing, our projects set new benchmarks in innovation."
          },
          {
            jobid: 2,
            jobTitle: "UX Designer",
            jobType: "Full Time",
            summary: "Engage in groundbreaking AI projects that redefine industries and drive meaningful change. From enhancing autonomous systems to advancing natural language processing, our projects set new benchmarks in innovation."
          },
          {
            jobid: 3,
            jobTitle: "UX Designer",
            jobType: "Hybrid",
            summary: "Engage in groundbreaking AIddsbbds ds bds b dfj fdjb dfj dfj ddfdffffffffffff projects that redefine industries and drive meaningful change. From enhancing autonomous systems to advancing natural language processing, our projects set new benchmarks in innovation."
          },
          {
            jobid: 4,
            jobTitle: "UX Designer",
            summary: "Engage in groundbreaking AI protries and drive meaningful change. From enhancing autonomous systems to advancing natural language processing, our projects set new benchmarks in innovation."
          }
        ]
      },
      {
        jobCategory: "Development Job Openings",
        jobs: [
          {
            jobid: 5,
            jobTitle: "Software Engineer",
            jobType: "Intern",
            summary: "Work on cutting-edge software development projects that impact millions of users globally."
          },
          {
            jobid: 6,
            jobTitle: "Software Engineer ",
            jobType: "Full Time",
            summary: "Join our team of developers and work on innovative projects that shape the future of technology."
          }
        ]
      },
      {
        jobCategory: "Development Job Openings",
        jobs: [
          {
            jobid: 5,
            jobTitle: "Software Engineer",
            jobType: "Intern",
            summary: "Work on cutting-edge software development projects that impact millions of users globally."
          },
          {
            jobid: 6,
            jobTitle: "Software Engineer",
            jobType: "Full Time",
            summary: "Join our team of developers and work on innovative projects that shape the future of technology."
          }
        ]
      }
    ]
  }

  applyNow(jobId: number) {
    console.log(`Applying for job with ID: ${jobId}`);
    // Implement your application logic here
  }


}
