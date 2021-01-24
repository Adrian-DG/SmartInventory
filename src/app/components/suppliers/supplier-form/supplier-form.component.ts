import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { FireDbService } from "src/app/services/firebase-db/fire-db.service";

@Component({
	selector: "app-supplier-form",
	templateUrl: "./supplier-form.component.html",
	styleUrls: ["./supplier-form.component.scss"],
})
export class SupplierFormComponent implements OnInit {
	supplierForm: FormGroup = new FormGroup({
		name: new FormControl("", [Validators.required]),
		phone: new FormControl("", [Validators.required]),
		email: new FormControl("", [Validators.required]),
	});

	constructor(private _db: FireDbService) {}

	ngOnInit(): void {}

	onSubmit() {
		this._db.CreateSupplier(this.supplierForm.value);
	}
}
