import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AppModule } from './app.module';

require('!style!css!sass!bootstrap-sass/assets/stylesheets/_bootstrap');
require('!style!css!font-awesome/css/font-awesome.min.css');
require('!style!css!sass!./assets/site.scss');

enableProdMode();

platformBrowserDynamic().bootstrapModule(AppModule);