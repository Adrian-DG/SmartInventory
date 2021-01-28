import { Injectable } from "@angular/core";
import {
	AngularFirestore,
	AngularFirestoreCollection,
} from "@angular/fire/firestore";
import { ISupplier } from "src/app/interfaces/supplier/supplier";
import { IUser } from "../../interfaces/user/user";
import { IProduct } from "src/app/interfaces/product/product";

@Injectable({
	providedIn: "root",
})
export class FireDbService {
	private collections = {
		users: "users",
		suppliers: "suppliers",
		products: "products",
	};

	constructor(private _db: AngularFirestore) {}

	SaveUser(user: IUser): void {
		this._db
			.collection(this.collections.users)
			.add(user)
			.then((doc) => console.log(`A new user ${doc.id} has been added`))
			.catch((error) => console.log(error));
	}

	CreateSupplier(suplier: ISupplier): void {
		suplier.id = this._db.createId();
		suplier.user_id = sessionStorage.getItem("userUID") || "";

		this._db
			.collection(this.collections.suppliers)
			.add(suplier)
			.then(() => alert("supplier created succesfully"))
			.catch((error) => console.log(error));
	}

	GetUserSuppliers(): AngularFirestoreCollection<ISupplier> {
		return this._db.collection<ISupplier>(
			this.collections.suppliers,
			(ref) => {
				return ref.where(
					"user_id",
					"==",
					sessionStorage.getItem("userUID")
				);
			}
		);
	}

	// return user details
	GetSupplierById(id: string): AngularFirestoreCollection<ISupplier> {
		return this._db.collection<ISupplier>(
			this.collections.suppliers,
			(ref) => {
				return ref.where("id", "==", id);
			}
		);
	}

	// FIXME: check out delete method
	DeleteSupplier(id: string): void {
		this._db
			.collection<ISupplier>(this.collections.suppliers)
			.doc<ISupplier>(id)
			.delete()
			.then(() => alert("A document has been deleted"))
			.catch((error) => console.log(error));
	}

	CreateProduct(product: IProduct): void {
		this._db
			.collection(this.collections.products)
			.add(product)
			.then(() => alert("A new product has been added"))
			.catch((error) => console.log(error));
	}

	GetSupplierProducts(id: string): AngularFirestoreCollection<IProduct> {
		return this._db.collection<IProduct>(
			this.collections.products,
			(ref) => {
				return ref.where("supplier", "==", id);
			}
		);
	}
}
