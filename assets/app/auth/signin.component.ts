import {Component, OnInit} from "@angular/core";
import {FormGroup, FormControl, Validators} from "@angular/forms";
import {Router} from "@angular/router";


import {User} from "./user.model";
import {AuthService} from "./auth.service";

@Component({
    selector: 'app-sigin',
    templateUrl: './signin.component.html'
})

export class SigninComponent implements OnInit {
    signUpForm: FormGroup;

    constructor(private authService: AuthService, private router: Router) {
    }

    ngOnInit() {
        const EMAIL_REGEXP = "[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?";
        this.signUpForm = new FormGroup({
            email: new FormControl(null, [
                Validators.required,
                Validators.pattern(EMAIL_REGEXP)
            ]),
            password: new FormControl(null, Validators.required)
        });
    }

    onSubmit() {
        const user = new User(this.signUpForm.value.email, this.signUpForm.value.password);
        this.authService.signin(user)
            .subscribe(
                data => {
                    localStorage.setItem('token', data.token);
                    localStorage.setItem('userId', data.userId);
                    this.router.navigateByUrl('/');
                },
                error => console.log(error)
            );
        this.signUpForm.reset();
    }
}