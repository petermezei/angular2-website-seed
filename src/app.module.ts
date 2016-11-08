import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

import { HeaderComponent } from './app/common/header/header.component';
import { NotFoundPageComponent } from './app/404/404.component';
import { InsightComponent } from './app/insight/insight.component';
import { HomeComponent } from './app/home/home.component';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'home', component: HomeComponent },
      { path: 'insight', component: InsightComponent },
      { path: '404', component: NotFoundPageComponent },
      { path: '**', redirectTo: '/404' }
    ])
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    NotFoundPageComponent,
    InsightComponent,
    HomeComponent
  ],
  providers: [
  ],
  bootstrap: [ AppComponent ]
})

export class AppModule {}