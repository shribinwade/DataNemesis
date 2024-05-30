import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AiComponent } from './ai/ai.component';

import { AboutUsComponent } from './about-us/about-us.component';
import { ContactComponent } from './contact/contact.component';
import { VideoComponent } from './video/video.component';
import { SloganComponent } from './slogan/slogan.component';
import { SubsectionComponent } from './subsection/subsection.component';
import { ServicesComponent } from './services/services.component';
import { MIToolComponent } from './mitool/mitool.component';
import { PriceOptimizationComponent } from './price-optimization/price-optimization.component';
import { SentimentAnalysisComponent } from './sentiment-analysis/sentiment-analysis.component';
import { TopLogosComponent } from './top-logos/top-logos.component';
import { MainLogosComponent } from './main-logos/main-logos.component';
import { MatGridList, MatGridListModule } from '@angular/material/grid-list';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { PricingComponent } from './pricing/pricing.component';
import { BlogComponent } from './blog/blog.component';
import { NextDirective } from './next.directive';
import { PrevDirective } from './prev.directive';
import { ProductServiceComponent } from './product-service/product-service.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { MarketSearchComponent } from './market-search/market-search.component';
import { CompetitorAnalysisComponent } from './competitor-analysis/competitor-analysis.component';
import { KeywordSearchComponent } from './keyword-search/keyword-search.component';
import { SKUSearchComponent } from '../sku-components/sku-search/sku-search.component';
import { SkusearchComponent } from '../sku-components/skusearch/skusearch.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AiComponent,
    AboutUsComponent,
    ContactComponent,
    VideoComponent,
    SloganComponent,
    SubsectionComponent,
    ServicesComponent,
    MIToolComponent,
    PriceOptimizationComponent,
    SentimentAnalysisComponent,
    TopLogosComponent,
    MainLogosComponent,
    LoginComponent,
    SignupComponent,
    PricingComponent,
    BlogComponent,
    NextDirective,
    PrevDirective,
    ProductServiceComponent,
    ProductDetailsComponent,
    NotFoundComponent,
    MarketSearchComponent,
    CompetitorAnalysisComponent,
    KeywordSearchComponent,
    SKUSearchComponent,
    SkusearchComponent,
    
   
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatMenuModule,
    MatGridListModule,
    
    
    
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
