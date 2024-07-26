import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { ContactUsComponent } from './modules/contact-us/contact-us.component';
import { HomeComponent } from './modules/home/home.component';
import { AboutUsComponent } from './modules/about-us/about-us.component';
import { ProjectsComponent } from './modules/projects/projects.component';
import { ServicesComponent } from './modules/services/services.component';
import { CareersComponent } from './modules/careers/careers.component';
import { TermsAndConditionsComponent } from './common-components/terms-and-conditions/terms-and-conditions.component';
import { PrivacyPolicyComponent } from './common-components/privacy-policy/privacy-policy.component';
import { FaqComponent } from './common-components/faq/faq.component';
import { ServiceDetailsComponent } from './modules/service-details/service-details.component';
import { ServiceSubDetailsComponent } from './modules/service-sub-details/service-sub-details.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'careers', component: CareersComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'terms-and-conditions', component: TermsAndConditionsComponent },
  { path: 'privacy-policy', component: PrivacyPolicyComponent },
  { path: 'faq', component: FaqComponent },
  { path: 'services/:routeName', component: ServiceDetailsComponent },
  { path: 'services/:routeName/:routeName', component: ServiceSubDetailsComponent },
];
const routerOptions: ExtraOptions = {
  scrollPositionRestoration: 'top',
  anchorScrolling: 'enabled',
};

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
