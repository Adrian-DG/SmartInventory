import { utf8Encode } from "@angular/compiler/src/util";
import { Injectable } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/auth";
import { IUser } from "../../interfaces/user/user";

import { FireDbService } from "../firebase-db/fire-db.service";

@Injectable({
	providedIn: "root",
})
export class AuthService {
	constructor(private _auth: AngularFireAuth, private _db: FireDbService) {}

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
			.then((resp) => console.log(resp))
			.catch((error) => console.log(error));
	}
}
