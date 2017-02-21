import {Component} from "@angular/core";
import {AuthService} from "./auth.service";
@Component({
    selector: 'app-authentication',
    template: `
        <header class="row spacing">
            <nav class="col-md-8 col-md-offset-2">
                <ul class="nav nat-tabs">
                    <li routerLinkActive="active" style="display:inline-block;"><a [routerLink]="['signup']"> Signup</a></li>
                    <li routerLinkActive="active" *ngIf="!isLoggedIn()" style="display:inline-block;"><a [routerLink]="['signin']"> Signin</a></li>
                    <li routerLinkActive="active" *ngIf="isLoggedIn()" style="display:inline-block;"><a [routerLink]="['logout']"> Logout</a></li>
                </ul>
            </nav>
        </header>
        
        <div class="row spacing">
            <router-outlet></router-outlet>
        </div>
`
})
export class AuthenticationComponent {
    constructor(private authService: AuthService) {
    }

    isLoggedIn() {
        return this.authService.isLoggedIn();
    }
}