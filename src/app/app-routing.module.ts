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

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'ai', component: AiComponent },
  { path: 'priceoptimization', component: PriceOptimizationComponent  },
  { path: 'sentiment-analysis', component: SentimentAnalysisComponent  },
  { path: 'mitool', component: MIToolComponent  },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'signup',component: SignupComponent},
  { path: 'login',component: LoginComponent},
  { path: 'app-pricing',component: PricingComponent},
  { path: 'app-blog',component: BlogComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
