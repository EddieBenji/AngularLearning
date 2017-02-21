import {Component, OnInit} from "@angular/core";
import {FormGroup, FormControl, Validators} from "@angular/forms";
import {AuthService} from "./auth.service";
import {User} from "./user.model";
@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html'
})

export class SignupComponent implements OnInit {
    signUpForm: FormGroup;

    constructor(private authService: AuthService) {

    }

    ngOnInit() {
        const EMAIL_REGEXP = "[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?";
        this.signUpForm = new FormGroup({
            firstName: new FormControl(null, Validators.required),
            lastName: new FormControl(null, Validators.required),
            email: new FormControl(null, [
                Validators.required,
                Validators.pattern(EMAIL_REGEXP)
            ]),
            password: new FormControl(null, Validators.required)
        });
    }

    onSubmit() {
        const user = new User(
            this.signUpForm.value.email,
            this.signUpForm.value.password,
            this.signUpForm.value.firstName,
            this.signUpForm.value.lastName
        );
        this.authService.signup(user).subscribe(
            data => console.log(data),
            error => console.log(error)
        );
        this.signUpForm.reset();
    }
}