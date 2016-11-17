import { Component, Input } from '@angular/core';

@Component({
    selector: 'pm-header',
    template: require('./header.component.html'),
    styles: [require('./header.component.scss')]
})

export class HeaderComponent {
    @Input() theme: String = "theme-default";
}