import { Injectable } from "@angular/core";
import { AngularFirestore } from "@angular/fire/firestore";
import { IUser } from "../../interfaces/user/user";

@Injectable({
	providedIn: "root",
})
export class FireDbService {
	private collections = {
		users: "users",
	};

	constructor(private _db: AngularFirestore) {}

	SaveUser(user: IUser): void {
		this._db
			.collection(this.collections.users)
			.add(user)
			.then((doc) => console.log(`A new user ${doc.id} has been added`))
			.catch((error) => console.log(error));
	}
}
