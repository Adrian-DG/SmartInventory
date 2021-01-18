import { utf8Encode } from "@angular/compiler/src/util";
import { Injectable } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/auth";
import { IUser } from "../../interfaces/user/user";

import { FireDbService } from "../firebase-db/fire-db.service";

@Injectable({
	providedIn: "root",
})
export class AuthService {
	private isLogged: boolean = false;
	private currentUser!: { id: string; email: string };

	constructor(private _auth: AngularFireAuth, private _db: FireDbService) {}

	setCurrentUser(credentials: any) {
		this.currentUser = credentials;
	}

	getCurrentUser() {
		return this.currentUser;
	}

	setLoggedStatus() {
		this.isLogged = !this.isLogged;
	}

	getLoggedStatus() {
		return this.isLogged;
	}

	SignUp(data: IUser): void {
		const { email, password } = data;
		this._auth
			.createUserWithEmailAndPassword(email, password)
			.then((resp) => this._db.SaveUser({ id: resp.user?.uid, ...data }))
			.catch((error) => console.log(error));
	}

	SignIn(email: string, password: string): boolean {
		this._auth
			.signInWithEmailAndPassword(email, password)
			.then((resp) => {
				const credentials = {
					id: resp.user?.uid,
					email: resp.user?.email,
				};
				this.setLoggedStatus();
				this.setCurrentUser(credentials);
			})
			.catch((error) => console.log(error));

		return this.getLoggedStatus();
	}
}
