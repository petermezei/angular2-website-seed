import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
    template: require('./privacy-policy.component.html'),
    styles: [require('./privacy-policy.component.scss')]
})

export class PrivacyPolicyComponent {
    constructor (title: Title){
        title.setTitle("Privacy Policy");
    }
}