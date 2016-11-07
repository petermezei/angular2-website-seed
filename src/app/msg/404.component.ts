import { Component, OnInit }  from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
    templateUrl: 'app/msg/404.component.html',
    styleUrls: ['app/msg/404.component.css']
})
export class NotFoundComponent implements OnInit {
        
    constructor(private router: Router) {

    }

    ngOnInit(): void {
           //Nothing;
    }
}
