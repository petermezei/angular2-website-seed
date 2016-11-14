import { Component } from '@angular/core';

@Component({
    selector: 'pm-demo',
    template: require('./demo.html')
})

export class DemoComponent {
    name = "Peti";
    age = 27;
}