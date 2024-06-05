import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { ContactUsComponent } from './modules/contact-us/contact-us.component';
import { HomeComponent } from './modules/home/home.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'contact-us', component: ContactUsComponent }
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
