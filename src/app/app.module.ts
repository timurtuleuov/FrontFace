import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { BrandSectionComponent } from './component/brand-section/brand-section.component';
import { PriceSectionComponent } from './component/price-section/price-section.component';
import { FaqSectionComponent } from './component/faq-section/faq-section.component';
import { DesqSectionComponent } from './component/desq-section/desq-section.component';
import { FreeTrialSectionComponent } from './component/free-trial-section/free-trial-section.component';
import { FooterComponent } from './component/footer/footer.component';
import { CardViewComponent } from './component/card-view/card-view.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BrandSectionComponent,
    PriceSectionComponent,
    FaqSectionComponent,
    DesqSectionComponent,
    FreeTrialSectionComponent,
    FooterComponent,
    CardViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
