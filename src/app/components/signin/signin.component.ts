import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { AuthService } from "../../services/authentication/auth.service";

import { Router } from "@angular/router";

@Component({
	selector: "app-signin",
	templateUrl: "./signin.component.html",
	styleUrls: ["./signin.component.scss"],
})
export class SigninComponent implements OnInit {
	signinForm: FormGroup = new FormGroup({
		email: new FormControl("", [Validators.required]),
		password: new FormControl("", [
			Validators.required,
			Validators.minLength(8),
			Validators.maxLength(10),
		]),
	});

	constructor(private _auth: AuthService, private $router: Router) {}

	ngOnInit(): void {}

	onSubmit() {
		const { email, password } = this.signinForm.value;
		const status = this._auth.SignIn(email, password);

		if (!status) {
			alert("Something went wrong, check your credentials again");
			return;
		}

		this.$router.navigate(["home"]);
	}
}
