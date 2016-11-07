require('./assets/site.scss');

import { Component } from '@angular/core';

@Component({
    selector: 'pm-app',
    template: `<router-outlet></router-outlet>`
})

export class AppComponent {
    title = "Hello";
};