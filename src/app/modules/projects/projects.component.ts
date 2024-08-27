import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerComponent } from "../../common-components/banner/banner.component";
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
interface Project {
  title: string;
  client: string;
  overview: string;
  challenge: string;
  solution: string;
  features: string[];
  results: string;
  testimonial: string;
  category: string;
  thumbnail: string;
  images: string[];
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, BannerComponent, FormsModule, MatSelectModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  searchTerm = '';
  filterCategory = '';
  selectedProject: Project | null = null;

  projects: Project[] = [
    {
      title: 'Advanced LSTM Model for Forex Trading Indicators Prediction',
      client: 'Claudio Jhon, USA',
      overview:
        'At MalDsAI Laboratory, we take immense pride in delivering innovative and data-driven solutions that empower businesses and individuals to make informed decisions.',
      challenge:
        'Claudio Jhon approached us with a unique challenge. He needed a state-of-the-art predictive model that could anticipate forex trading indicators with a high degree of accuracy. The forex market is notoriously volatile, and making timely and well-informed decisions is paramount to success. Claudio recognized the potential of artificial intelligence and time series forecasting, and he entrusted us with the task of creating a solution that would redefine his trading strategy.',
      solution:
        'Our team of data scientists and AI experts worked diligently to devise a custom solution tailored to Claudio\'s specific needs. We opted for a deep learning approach, designing and fine-tuning an Advanced Long Short-Term Memory (LSTM) model. LSTM is well-known for its effectiveness in handling time series data, and its ability to capture complex patterns and trends in the financial markets made it an ideal choice for this project.',
      features: [
        'Multicurrency Pairs Forecasting',
        'Fine-Tuned Accuracy',
        'Real-time Capabilities',
        'Adaptability',
      ],
      results:
        'The implementation of our Advanced LSTM model transformed Claudio Jhon\'s trading bot into a powerful tool that consistently outperformed the market. Claudio saw a significant increase in his trading profits and a remarkable reduction in risk, thanks to our data-driven solution.',
      testimonial:
        '"Working with MalDsAI Laboratory has been a game-changer for my trading career. The AI model they developed has not only enhanced my decision-making but also boosted my trading profits significantly. I highly recommend their services." - Claudio Jhon',
      category: 'Finance',
      thumbnail: '../../../assets/images/image copy 4.png',
      images: [
        '../../../assets/images/image copy 4.png',
        '../../../assets/images/image copy 4.png',
        '../../../assets/images/image copy 4.png',
      ],
    },
    {
      title: 'Advanced AI Models for Age, Gender, and Emotions Detection',
      client: 'Jacob, USA',
      overview:
        'At MalDsAI Laboratory, we are at the forefront of harnessing the power of artificial intelligence to transform industries.',
      challenge:
        'Jacob approached us with a unique challenge - the need for accurate and efficient age, gender, and emotions detection models. In an era where personalized user experiences and data-driven insights are paramount, Jacob recognized the potential of this technology to revolutionize his business. He entrusted us with the task of creating a solution that would enable him to understand and connect with his audience on a deeper level.',
      solution:
        'Our team of AI experts and data scientists embarked on the journey to develop advanced models for age, gender, and emotions detection. Leveraging cutting-edge machine learning and computer vision techniques, we created models that are highly accurate, fast, and adaptable to various applications.',
      features: [
        'Age Detection',
        'Gender Detection',
        'Emotions Detection',
        'Real-time Processing',
      ],
      results:
        'The implementation of our advanced AI models has transformed Jacob\'s approach to user engagement and marketing. By understanding the age, gender, and emotions of his audience, he has been able to tailor his content, advertisements, and messaging for maximum impact. The results have been nothing short of remarkable.',
      testimonial:
        '"Collaborating with MalDsAI Laboratory has been a game-changer for my business. Their AI models have allowed me to connect with my audience on a whole new level, resulting in increased engagement and customer satisfaction. I can\'t recommend their services enough." - Jacob',
      category: 'AI',
      thumbnail: '../../../assets/images/image copy 4.png',
      images: [
        '../../../assets/images/image copy 4.png',
        '../../../assets/images/image copy 4.png',
        '../../../assets/images/image copy 4.png',
        '../../../assets/images/image copy 4.png',
        '../../../assets/images/image copy 4.png',
        '../../../assets/images/image copy 4.png',
      ],
    },
    // Add more projects following the same structure
  ];

  openModal(project: Project): void {
    this.selectedProject = project;
  }

  closeModal(): void {
    this.selectedProject = null;
  }

  categories = ['Finance', 'AI'];


  filteredProjects() {
    return this.projects.filter(project => {
      const matchesSearchTerm = this.searchTerm.trim() === '' || project.title.toLowerCase().includes(this.searchTerm.trim().toLowerCase());
      const matchesCategory = this.filterCategory === '' || project.category === this.filterCategory;
      return matchesSearchTerm && matchesCategory;
    });
  }





}
