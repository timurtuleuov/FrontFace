import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { BrandSectionComponent } from './component/brand-section/brand-section.component';
import { PriceSectionComponent } from './component/price-section/price-section.component';
import { FaqSectionComponent } from './component/faq-section/faq-section.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BrandSectionComponent,
    PriceSectionComponent,
    FaqSectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
