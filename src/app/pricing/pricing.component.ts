import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Price } from './pricing.model';

@Component({
    template: require('./pricing.component.html'),
    styles: [require('./pricing.component.scss')]
})

export class PricingComponent {
    constructor (title: Title){
        title.setTitle("Pricing");
    }

    prices = [
        new Price("a","1"),
        new Price("b","2"),
        new Price("c","3")
    ];

}