import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
    template: require('./kriszti.component.html'),
    styles: [require('./kriszti.component.scss')]
})

export class KrisztiComponent {
    constructor (title: Title){
        title.setTitle("Kriszti Page");
    }
}