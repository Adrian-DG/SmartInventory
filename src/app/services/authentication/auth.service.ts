import { utf8Encode } from "@angular/compiler/src/util";
import { Injectable } from "@angular/core";
import { IUser } from "../../interfaces/user/user";

import { AngularFireAuth } from "@angular/fire/auth";
import { FireDbService } from "../firebase-db/fire-db.service";
import { Router } from "@angular/router";

@Injectable({
	providedIn: "root",
})
export class AuthService {
	constructor(
		private _auth: AngularFireAuth,
		private _db: FireDbService,
		private $router: Router
	) {}

	SignUp(data: IUser): void {
		const { email, password } = data;
		this._auth
			.createUserWithEmailAndPassword(email, password)
			.then((resp) => this._db.SaveUser({ id: resp.user?.uid, ...data }))
			.catch((error) => console.log(error));
	}

	SignIn(email: string, password: string): void {
		this._auth
			.signInWithEmailAndPassword(email, password)
			.then((resp) => {
				if (resp.user) {
					sessionStorage.setItem("currentUser", email);
					sessionStorage.setItem("userUID", resp.user?.uid);
					this.$router.navigate(["home", resp.user?.uid]);
				}
			})
			.catch((error) => console.log(error));
	}

	SignOut(): void {
		this._auth
			.signOut()
			.then(() => {
				sessionStorage.clear();
				this.$router.navigate([""]);
			})
			.catch((error) => console.log(error));
	}
}
