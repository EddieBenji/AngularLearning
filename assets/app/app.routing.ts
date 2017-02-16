import {Routes, RouterModule} from "@angular/router";
import {MessagesComponent} from "./messages/messages.component";
import {AuthenticationComponent} from "./auth/authentication.component";
import {AUTH_ROUTES} from "./auth/auth.routes";

const APP_ROUTES: Routes = [
    //In here, the redirectTo will redirect the user to localhost:../messages because is the absolute path.
    {path: '', redirectTo: '/messages', pathMatch: 'full'},
    {path: 'messages', component: MessagesComponent},
    {path: 'auth', component: AuthenticationComponent, children: AUTH_ROUTES},
];

export const routing = RouterModule.forRoot(APP_ROUTES);