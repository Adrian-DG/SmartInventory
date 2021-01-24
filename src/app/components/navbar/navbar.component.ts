import { Component, OnInit, Input } from "@angular/core";
import { AuthService } from "src/app/services/authentication/auth.service";

@Component({
	selector: "app-navbar",
	templateUrl: "./navbar.component.html",
	styleUrls: ["./navbar.component.scss"],
})
export class NavbarComponent implements OnInit {
	@Input() currentUser!: string;
	constructor(private _aut: AuthService) {}

	ngOnInit(): void {}

	LogOut(): void {
		this._aut.SignOut();
	}
}
