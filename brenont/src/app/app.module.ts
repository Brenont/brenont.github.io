import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MeComponent } from './components/me/me.component';
import { SkillsComponent } from './components/skills/skills.component';
import { WorksComponent } from './components/works/works.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './containers/home/home.component';
import { ProgressbarComponent } from './components/progressbar/progressbar.component';
import { IconsSvgComponent } from './components/icons-svg/icons-svg.component'

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MeComponent,
    SkillsComponent,
    WorksComponent,
    ContactComponent,
    HomeComponent,
    ProgressbarComponent,
    IconsSvgComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
