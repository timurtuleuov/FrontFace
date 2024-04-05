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
import { HomeComponent } from './component/screens/home/home.component';
import { AuthComponent } from './component/auth/auth.component';
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';
import { CommonModule } from '@angular/common';
import { FileLoadComponent } from './component/file-load/file-load.component';
import { SignInComponent } from './component/sign-in/sign-in.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {MatIconModule} from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';

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
    CardViewComponent,
    HomeComponent,
    AuthComponent,
    FileLoadComponent,
    SignInComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    NgxMaskDirective, 
    NgxMaskPipe,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    
  ],
  providers: [provideNgxMask(), provideAnimationsAsync()],
  bootstrap: [AppComponent]
})
export class AppModule { }
