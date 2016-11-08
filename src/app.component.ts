import { Component } from '@angular/core';

@Component({
    selector: 'pm-app',
    template: `<pm-header></pm-header>
    <router-outlet></router-outlet>
    <pm-footer></pm-footer>`
})

export class AppComponent {};