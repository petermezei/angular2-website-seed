import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

import { AComponent } from './app/a/a.component';
import { BComponent } from './app/b/b.component';
import { HeaderComponent } from './app/header/header.component';
import { NotFoundPageComponent } from './app/404/404.component';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: '', component: AComponent },
      { path: 'a', component: AComponent },
      { path: 'b', component: BComponent },
      { path: '404', component: NotFoundPageComponent },
      { path: '**', redirectTo: '/404' }
    ])
  ],
  declarations: [
    AppComponent,
    AComponent,
    BComponent,
    HeaderComponent,
    NotFoundPageComponent
  ],
  providers: [
  ],
  bootstrap: [ AppComponent ]
})

export class AppModule {}