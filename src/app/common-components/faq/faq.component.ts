import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent {

  
  faqs = [
    { question: 'What services does MalDSAI offer?', answer: 'MalDSAI offers a wide range of services including machine learning model development, data analysis, AI consulting, and custom AI solutions.', open: true },
    { question: 'How can MalDSAI help improve my business?', answer: 'MalDSAI can help your business by developing custom AI solutions that automate processes, improve decision-making, and provide valuable insights from your data.', open: false },
    { question: 'What industries does MalDSAI specialize in?', answer: 'MalDSAI specializes in various industries including healthcare, finance, retail, and manufacturing, providing tailored AI solutions to meet specific industry needs.', open: false },
    { question: 'What is the process for starting a project with MalDSAI?', answer: 'To start a project with MalDSAI, you can contact us through our website. We will schedule an initial consultation to understand your needs and develop a customized plan for your project.', open: false },
    { question: 'Does MalDSAI provide support and maintenance for AI solutions?', answer: 'Yes, MalDSAI offers ongoing support and maintenance for all AI solutions we develop, ensuring they continue to deliver optimal performance.', open: false }
  ];


  review = [
    {
      rating: 5,
      title: 'Innovative & Impactful Projects',
      content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt a ipsum, quas, repellendus libero delectus tempora, perspiciatis ullam eos soluta consequuntur in error inventore. Quo laboriosam porro aliquam nisi ullam.',
      image: '../../../assets/images/profile.png',
      name: 'Client name 1',
      desigination: 'UX Developer'
    },
    {
      rating: 4,
      title: 'Innovative & Impactful Projects',
      content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt a ipsum, quas, repellendus libero delectus tempora, perspiciatis ullam eos soluta consequuntur in error inventore. Quo laboriosam porro aliquam nisi ullam.',
      image: '../../../assets/images/profile.png',
      name: 'Client name 1',
      desigination: 'UX Developer'
    },
    {
      rating: 3,
      title: 'Innovative & Impactful Projects',
      content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt a ipsum, quas, repellendus libero delectus tempora, perspiciatis ullam eos soluta consequuntur in error inventore. Quo laboriosam porro aliquam nisi ullam.',
      image: '../../../assets/images/profile.png',
      name: 'Client name 1',
      desigination: 'UX Developer'
    },
    {
      rating: 5,
      title: 'Innovative & Impactful Projects',
      content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt a ipsum, quas, repellendus libero delectus tempora, perspiciatis ullam eos soluta consequuntur in error inventore. Quo laboriosam porro aliquam nisi ullam.',
      image: '../../../assets/images/profile.png',
      name: 'Client name 1',
      desigination: 'UX Developer'
    },
  ];


  toggleFaq(index: number): void {
    this.faqs.forEach((faq, i) => faq.open = i === index ? !faq.open : false);
  }
}
