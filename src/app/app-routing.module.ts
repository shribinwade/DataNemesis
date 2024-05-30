import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { AiComponent } from './ai/ai.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';

import { ServicesComponent } from './services/services.component';
import { MIToolComponent } from './mitool/mitool.component';
import { PriceOptimizationComponent } from './price-optimization/price-optimization.component';
import { SentimentAnalysisComponent } from './sentiment-analysis/sentiment-analysis.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { PricingComponent } from './pricing/pricing.component';
import { BlogComponent } from './blog/blog.component';
import { ProductServiceComponent } from './product-service/product-service.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { MarketSearchComponent } from './market-search/market-search.component';
import { CompetitorAnalysisComponent } from './competitor-analysis/competitor-analysis.component';
import { SKUSearchComponent } from '../sku-components/sku-search/sku-search.component';
import { KeywordSearchComponent } from './keyword-search/keyword-search.component';



const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'ai', component: AiComponent },
  { path: 'priceoptimization', component: PriceOptimizationComponent  },
  { path: 'sentiment-analysis', component: SentimentAnalysisComponent  },
  { path: 'mitool', component: MIToolComponent},
  { path: 'about-us', component: AboutUsComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'signup',component: SignupComponent},
  { path: 'login',component: LoginComponent},
  { path: 'mitool/product-details/:name/:id',component: ProductDetailsComponent},

  { path: 'app-pricing',component: PricingComponent},
  { path: 'app-blog',component: BlogComponent},
  {
    path: 'product-service',
    component: ProductServiceComponent,
    children: [
      { path: 'product-details/:name/:id', component: ProductDetailsComponent } // Nested route with ID parameter
    ]
  },
  { path: 'mitool/product-details/:name/:id/market-search',component: MarketSearchComponent},
  { path: 'mitool/product-details/:name/:id/competitor-analysis',component: CompetitorAnalysisComponent},
  {path: 'mitool/product-details/:name/:id/sku-search', component:SKUSearchComponent},
  {path: 'mitool/product-details/:name/:id/keyword-search', component:KeywordSearchComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
