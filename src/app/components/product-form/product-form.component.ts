import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Observable } from "rxjs";
import { ISupplier } from "src/app/interfaces/supplier/supplier";
import { FireDbService } from "src/app/services/firebase-db/fire-db.service";
@Component({
	selector: "app-product-form",
	templateUrl: "./product-form.component.html",
	styleUrls: ["./product-form.component.scss"],
})
export class ProductFormComponent implements OnInit {
	userSuppliers!: Observable<ISupplier[]>;
	productForm: FormGroup = new FormGroup({
		name: new FormControl("", Validators.required),
		price: new FormControl("", Validators.required),
		supplier: new FormControl("", Validators.required),
	});

	constructor(private _db: FireDbService) {}

	ngOnInit(): void {
		this.userSuppliers = this._db.GetUserSuppliers().valueChanges();
	}

	onSubmit() {
		this._db.CreateProduct(this.productForm.value);
	}
}
