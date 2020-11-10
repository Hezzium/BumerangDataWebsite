import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './shared/nav/nav.component';
import { FooterComponent } from './shared/footer/footer.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { BodyComponent } from './components/body/body.component';
import { IntroductionComponent } from './components/introduction/introduction.component';
import { BenefitsComponent } from './components/benefits/benefits.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { ServicesComponent } from './components/services/services.component';
import { FaqComponent } from './components/faq/faq.component';
import { ContactComponent } from './components/contact/contact.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ExpComponent } from './exp/exp.component';
import { CotizarComponent } from './components/cotizar/cotizar.component';
import { SolucionComponent } from './components/solucion/solucion.component';
import { ParticlesModule } from 'angular-particle';
@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    WelcomeComponent,
    BodyComponent,
    IntroductionComponent,
    BenefitsComponent,
    AboutusComponent,
    ServicesComponent,
    FaqComponent,
    ContactComponent,
    ExpComponent,
    CotizarComponent,
    SolucionComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    ParticlesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
