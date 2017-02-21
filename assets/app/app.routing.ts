import {Routes, RouterModule} from "@angular/router";
import {MessagesComponent} from "./messages/messages.component";
import {AuthenticationComponent} from "./auth/authentication.component";

const APP_ROUTES: Routes = [
    //In here, the redirectTo will redirect the user to localhost:../messages because is the absolute path.
    {path: '', redirectTo: '/messages', pathMatch: 'full'},
    {path: 'messages', component: MessagesComponent},
    {path: 'auth', component: AuthenticationComponent, loadChildren: './auth/auth.module#AuthModule'},
];

export const routing = RouterModule.forRoot(APP_ROUTES);