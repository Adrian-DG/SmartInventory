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

	GetDetails(id: string): void {
		this._db
			.GetSupplierById(id)
			.valueChanges()
			.subscribe((data) => {
				data.forEach((item) => (this.currentSupplier = item));
			});
	}

	Delete(id: string): void {
		this._db.DeleteSupplier(id);
	}
}
