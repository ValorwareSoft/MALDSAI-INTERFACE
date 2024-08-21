import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FaqComponent } from "../../common-components/faq/faq.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FaqComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

}
