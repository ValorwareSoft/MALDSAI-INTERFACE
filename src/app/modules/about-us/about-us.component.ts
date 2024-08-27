import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerComponent } from "../../common-components/banner/banner.component";
import { FaqComponent } from "../../common-components/faq/faq.component";

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [CommonModule, BannerComponent, FaqComponent],
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss'],
})
export class AboutUsComponent implements AfterViewInit {
  teamMembers = [
    {
      name: 'Sharaschandra Bolunja',
      position: 'ML Engineer',
      description: 'Expert in machine learning models and AI-driven solutions.',
      image: '../../../assets/images/team-members/sharaschandra.png',
      linkedin: 'https://www.linkedin.com/in/sharaschandra',
      twitter: 'https://twitter.com/sharaschandra',
      instagram: 'https://www.instagram.com/sharaschandra',
      facebook: 'https://www.facebook.com/sharaschandra'
    },
    {
      name: 'Dr. Shweta Chawla Bhatia',
      position: 'Research Scientist',
      description: 'Specializes in advanced AI research and development.',
      image: '../../../assets/images/team-members/shweta.png',
      linkedin: 'https://www.linkedin.com/in/shweta-chawla',
      twitter: 'https://twitter.com/shweta_chawla',
      instagram: 'https://www.instagram.com/shweta.chawla',
      facebook: 'https://www.facebook.com/shweta.chawla'
    },
    {
      name: 'Dr. Bushara A R',
      position: 'Chief Technology Officer',
      description: 'Leads the technological strategy and development at MalDsAi.',
      image: '../../../assets/images/team-members/bushara.png',
      linkedin: 'https://www.linkedin.com/in/bushara-ar',
      twitter: 'https://twitter.com/bushara_ar',
      instagram: 'https://www.instagram.com/bushara.ar',
      facebook: 'https://www.facebook.com/bushara.ar'
    },
    {
      name: 'Victoria Ekweani',
      position: 'AI Engineer',
      description: 'Focused on developing AI solutions and intelligent systems.',
      image: '../../../assets/images/team-members/victoria.png',
      linkedin: 'https://www.linkedin.com/in/victoria-ekweani',
      twitter: 'https://twitter.com/victoria_ekweani',
      instagram: 'https://www.instagram.com/victoria.ekweani',
      facebook: 'https://www.facebook.com/victoria.ekweani'
    },
    {
      name: 'Biplov Paneru',
      position: 'AI Research Engineer',
      description: 'Passionate about research in AI and its practical applications.',
      image: '../../../assets/images/team-members/biplov.png',
      linkedin: 'https://www.linkedin.com/in/biplov-paneru',
      twitter: 'https://twitter.com/biplov_paneru',
      instagram: 'https://www.instagram.com/biplov.paneru',
      facebook: 'https://www.facebook.com/biplov.paneru'
    },
    {
      name: 'Tabassum Khatoon',
      position: 'Sales Manager',
      description: 'Expert in driving sales and building client relationships.',
      image: '../../../assets/images/team-members/tabassum.png',
      linkedin: 'https://www.linkedin.com/in/tabassum-khatoon',
      twitter: 'https://twitter.com/tabassum_khatoon',
      instagram: 'https://www.instagram.com/tabassum.khatoon',
      facebook: 'https://www.facebook.com/tabassum.khatoon'
    },
    {
      name: 'Balakrishnan Nagarajan',
      position: 'DevOps Engineer',
      description: 'Ensures smooth deployment and operation of AI systems.',
      image: '../../../assets/images/team-members/balakrishnan.png',
      linkedin: 'https://www.linkedin.com/in/balakrishnan-nagarajan',
      twitter: 'https://twitter.com/balakrishnan_n',
      instagram: 'https://www.instagram.com/balakrishnan.nagarajan',
      facebook: 'https://www.facebook.com/balakrishnan.nagarajan'
    },
    {
      name: 'Karthik Thota',
      position: 'Senior Lead Software Engineer',
      description: 'Leads the development of scalable software solutions.',
      image: '../../../assets/images/team-members/karthik.png',
      linkedin: 'https://www.linkedin.com/in/karthik-thota',
      twitter: 'https://twitter.com/karthik_thota',
      instagram: 'https://www.instagram.com/karthik.thota',
      facebook: 'https://www.facebook.com/karthik.thota'
    },
    {
      name: 'Viktor C',
      position: 'Computer Vision Engineer',
      description: 'Specializes in computer vision and image processing.',
      image: '../../../assets/images/team-members/viktor.png',
      linkedin: 'https://www.linkedin.com/in/viktor-c',
      twitter: 'https://twitter.com/viktor_c',
      instagram: 'https://www.instagram.com/viktor.c',
      facebook: 'https://www.facebook.com/viktor.c'
    },
    {
      name: 'Rahul Gadve RG',
      position: 'Data Scientist',
      description: 'Expert in data analysis and predictive modeling.',
      image: '../../../assets/images/team-members/rahul.png',
      linkedin: 'https://www.linkedin.com/in/rahul-gadve',
      twitter: 'https://twitter.com/rahul_gadve',
      instagram: 'https://www.instagram.com/rahul.gadve',
      facebook: 'https://www.facebook.com/rahul.gadve'
    }
  ];


  @ViewChild('routeMap') routeMap: ElementRef | undefined;


  workSteps = [
    { title: 'Initial Consultation', description: 'We begin by understanding your goals and challenges.', icon: 'bi bi-chat-dots' },
    { title: 'Requirement Analysis', description: 'We analyze your requirements to tailor our solutions.', icon: 'bi bi-file-earmark-text' },
    { title: 'Solution Design', description: 'We design a solution that meets your specific needs.', icon: 'bi bi-palette' },
    { title: 'Testing and Validation', description: 'We ensure the solution works perfectly through rigorous testing.', icon: 'bi bi-check-circle' },
    { title: 'Implementation', description: 'We implement the solution, integrating it into your operations.', icon: 'bi bi-tools' },
    { title: 'Deployment', description: 'We deploy the solution, making it fully operational.', icon: 'bi bi-upload' },
    { title: 'Support and Maintenance', description: 'We provide ongoing support to ensure continued success.', icon: 'bi bi-wrench' },
  ];

  ngAfterViewInit() {
    this.autoScroll();
  }

  autoScroll() {
    const routeMapElement = this.routeMap?.nativeElement;
    if (!routeMapElement) {
      return;
    }
    let scrollAmount = 0;
    const scrollStep = 2;
    const scrollInterval = 50;
    let maxScrollLeft = routeMapElement.scrollWidth - routeMapElement.clientWidth;

    const scrollIntervalId = setInterval(() => {
      if (scrollAmount < maxScrollLeft) {
        routeMapElement.scrollLeft += scrollStep;
        scrollAmount += scrollStep;
      } else {
        routeMapElement.scrollLeft = 0;
        scrollAmount = 0;
      }
    }, scrollInterval);

    routeMapElement.addEventListener('mouseenter', () => {
      clearInterval(scrollIntervalId);
    });

    routeMapElement.addEventListener('mouseleave', () => {
      this.autoScroll();
    });
  }


  highlightedStory = {
    title: 'Healthcare Revolution',
    challenge: 'Optimizing patient data management for better efficiency.',
    solution: 'We developed a tailored data management system that streamlined operations.',
    outcome: 'Achieved a 30% increase in operational efficiency.',
    link: '/success-stories/healthcare-revolution'
  };

  successStories = [
    {
      title: 'Retail Sales Boost',
      shortDescription: 'Our AI-driven recommendation system boosted a retail client\'s online sales by 25%.',
      image: '../../../assets/images/image copy 6.png',
      link: '/success-stories/retail-sales-boost'
    },
    {
      title: 'Financial Risk Reduction',
      shortDescription: 'By implementing predictive analytics, we reduced risk by 40% for a financial firm.',
      image: '../../../assets/images/image copy 5.png',
      link: '/success-stories/financial-risk-reduction'
    },
    {
      title: 'Healthcare Revolution',
      shortDescription: 'Optimized patient data management leading to a 30% increase in operational efficiency.',
      image: '../../../assets/images/image copy 5.png',
      link: '/success-stories/healthcare-revolution'
    },
    {
      title: 'Supply Chain Optimization',
      shortDescription: 'Streamlined logistics operations for a global supply chain, improving efficiency by 20%.',
      image: '../../../assets/images/image copy 5.png',
      link: '/success-stories/supply-chain-optimization'
    },
    {
      title: 'Customer Experience Enhancement',
      shortDescription: 'Enhanced customer engagement through AI-driven personalization, boosting satisfaction by 35%.',
      image: '../../../assets/images/image copy 5.png',
      link: '/success-stories/customer-experience-enhancement'
    },

  ];


  onJoinNow(): void {
    // Handle join community action, e.g., navigate to signup page or open a form
  }

  onContactUs(): void {
    // Handle contact action, e.g., open contact form or redirect to contact page
  }

}
