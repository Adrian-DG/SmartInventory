import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { ISupplier } from "src/app/interfaces/supplier/supplier";
import { FireDbService } from "src/app/services/firebase-db/fire-db.service";

@Component({
	selector: "app-supplier-table",
	templateUrl: "./supplier-table.component.html",
	styleUrls: ["./supplier-table.component.scss"],
})
export class SupplierTableComponent implements OnInit {
	suppliers!: Observable<ISupplier[]>;
	currentSupplier!: Observable<ISupplier[]> | {};
	constructor(private _db: FireDbService) {}

	ngOnInit(): void {
		this.suppliers = this._db.GetUserSuppliers().valueChanges();
	}

	GetDetails(supplier: ISupplier): void {
		if (supplier.id == undefined) {
			return;
		}
		this._db
			.GetSupplierById(supplier.id)
			.valueChanges()
			.subscribe((data) => {
				data.forEach((item) => (this.currentSupplier = item));
			});
	}

	Delete(supplier: ISupplier): void {
		if (supplier.id == undefined) {
			return;
		}
		this._db.DeleteSupplier(supplier.id);
	}
}
