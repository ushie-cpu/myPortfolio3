import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoute } from './routes';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AboutComponent } from './components/about/about.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { SkillsComponent } from './components/skills/skills.component';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { Router, RouterModule } from '@angular/router';
import { PortfolioServiceService } from '../app/_services/portfolioService.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AboutComponent,
    ProjectsComponent,
    SkillsComponent,
    HomeComponent,
    ContactComponent,
   
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(AppRoute),
    HttpClientModule,
  ],
  providers: [
    PortfolioServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
