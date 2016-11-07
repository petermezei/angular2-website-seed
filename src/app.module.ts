import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

import { AComponent } from './app/a/a.component';
import { BComponent } from './app/b/b.component';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: '', component: AComponent },
      { path: 'a', component: AComponent },
      { path: 'b', component: BComponent }
    ])
  ],
  declarations: [
    AppComponent,
    AComponent,
    BComponent
  ],
  providers: [
  ],
  bootstrap: [ AppComponent ]
})

export class AppModule {}