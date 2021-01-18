import { ThrowStmt } from "@angular/compiler";
import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";

import { AuthService } from "../../services/authentication/auth.service";

@Component({
	selector: "app-signup",
	templateUrl: "./signup.component.html",
	styleUrls: ["./signup.component.scss"],
})
export class SignupComponent implements OnInit {
	signupForm: FormGroup = new FormGroup({
		name: new FormControl("", [Validators.required]),
		lastname: new FormControl("", [Validators.required]),
		email: new FormControl("", [Validators.required]),
		password: new FormControl("", [
			Validators.required,
			Validators.minLength(8),
			Validators.maxLength(10),
		]),
	});

	constructor(private _auth: AuthService) {}

	ngOnInit(): void {}

	onSubmit() {
		this._auth.SignUp(this.signupForm.value);
	}
}
