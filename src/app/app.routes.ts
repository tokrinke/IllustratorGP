import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';

export const routes: Routes = [
    {'path': '', component: HomeComponent},
    {'path': 'Home',  component: HomeComponent},
    {'path': 'About', component: AboutComponent},
    {'path': 'Contact', component: ContactComponent}
];
