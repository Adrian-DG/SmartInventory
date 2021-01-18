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
	private patterns = {
		emailPattern: "^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$",
		// passwordPattern: "^(?=.*d)(?=.*[a-z])(?=.*[A-Z])(?!.*s).{6,12}$",
		// phonePattern: "^((\\+91-?)|0)?[0-9]{10}$",
	};

	signupForm: FormGroup = new FormGroup({
		name: new FormControl("", [
			Validators.required,
			Validators.minLength(3),
			Validators.maxLength(10),
		]),
		lastname: new FormControl("", [
			Validators.required,
			Validators.minLength(3),
			Validators.maxLength(10),
		]),
		phone: new FormControl("", [
			Validators.required,
			// Validators.pattern(this.patterns.phonePattern),
		]),
		email: new FormControl("", [
			Validators.required,
			Validators.pattern(this.patterns.emailPattern),
		]),
		password: new FormControl("", [
			Validators.required,
			Validators.minLength(8),
			Validators.maxLength(10),
			// Validators.pattern(this.patterns.passwordPattern),
		]),
	});

	constructor(private _auth: AuthService) {}

	ngOnInit(): void {}

	onSubmit() {
		this._auth.SignUp(this.signupForm.value);
	}
}
