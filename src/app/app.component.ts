import { Component, OnInit } from '@angular/core';
import {AuthService, FacebookLoginProvider, GoogleLoginProvider, SocialUser} from 'angular4-social-login';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

    private user: SocialUser;
    private loggedIn: boolean;

    constructor(private authService: AuthService) { }

    signInWithGoogle(): void {
        this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
    }

    signInWithFB(): void {
        this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
    }

    signOut(): void {
        this.authService.signOut();
    }

    ngOnInit() {
        this.authService.authState.subscribe((user) => {
            this.user = user;
            console.log('user',user);
            this.loggedIn = (user != null);
        });
    }
}
