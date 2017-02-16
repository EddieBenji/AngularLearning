import {Component} from "@angular/core";
@Component({
    selector:'app-authentication',
    template:`
        <header class="row spacing">
            <nav class="col-md-8 col-md-offset-2">
                <ul class="nav nat-tabs">
                    <li style="display: inline-block;"><a > Signup</a></li>
                    <li style="display: inline-block;"><a > Signin</a></li>
                    <li style="display: inline-block;"><a > Logout</a></li>
                </ul>
            </nav>
        </header>
`
})
export class AuthenticationComponent{

}