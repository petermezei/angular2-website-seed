import { Component } from '@angular/core';

@Component({
    selector: 'pm-app',
    template: `<pm-header></pm-header>
    <router-outlet></router-outlet>`
})

export class AppComponent {
    title = "Hello";
};