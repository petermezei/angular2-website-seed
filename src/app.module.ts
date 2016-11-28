import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { Angulartics2GoogleAnalytics, Angulartics2Module } from 'angulartics2';

import { AppComponent } from './app.component';

import {Ng2PageScrollModule} from 'ng2-page-scroll';

import { HeaderComponent } from './app/common/header/header.component';
import { FooterComponent } from './app/common/footer/footer.component';
import { NotFoundPageComponent } from './app/404/404.component';
import { ThankYouComponent } from './app/thankyou/thankyou.component';
import { InsightComponent } from './app/insight/insight.component';
import { HomeComponent } from './app/home/home.component';
import { SubmenuComponent } from './app/common/submenu/submenu.component';
import { PricingComponent } from './app/pricing/pricing.component';
import { GettingStartedComponent } from './app/getting-started/getting-started.component';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'home', component: HomeComponent },
      { path: 'insight', component: InsightComponent },
      { path: 'pricing', component: PricingComponent },
      { path: '404', component: NotFoundPageComponent },
      { path: 'thankyou', component: ThankYouComponent },
      { path: 'getting-started', component: GettingStartedComponent },
      { path: '**', redirectTo: '/404' }
    ]),
    Angulartics2Module.forRoot([ Angulartics2GoogleAnalytics ]),
    Ng2PageScrollModule.forRoot()
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NotFoundPageComponent,
    ThankYouComponent,
    GettingStartedComponent,
    InsightComponent,
    HomeComponent,
    SubmenuComponent,
    PricingComponent
  ],
  providers: [
  ],
  bootstrap: [ AppComponent ]
})

export class AppModule {}