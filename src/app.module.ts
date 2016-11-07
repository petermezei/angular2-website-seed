import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './app/shared/navbar/navbar.component';
import { NotFoundComponent } from './app/msg/404.component';
import { WelcomeComponent } from './app/home/index.component';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: '', component: WelcomeComponent }
    ])
  ],
  declarations: [
    AppComponent,
    NavbarComponent,
    NotFoundComponent,
    WelcomeComponent
  ],
  providers: [
  ],
  bootstrap: [ AppComponent ]
})

export class AppModule {}