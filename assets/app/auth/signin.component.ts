import {Component, OnInit} from "@angular/core";
import {FormGroup, FormControl, Validators} from "@angular/forms";

@Component({
    selector: 'app-sigin',
    templateUrl: './signin.component.html'
})

export class SigninComponent implements OnInit {
    signUpForm: FormGroup;

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
        console.log(this.signUpForm);
        this.signUpForm.reset();
    }
}