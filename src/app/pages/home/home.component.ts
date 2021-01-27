import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
	selector: "app-home",
	templateUrl: "./home.component.html",
	styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
	user!: string;

	constructor(private $router: Router) {}

	ngOnInit(): void {
		if (sessionStorage.getItem("currentUser") == null) {
			this.$router.navigate([""]);
			alert("You must be logged first");
			return;
		}

		this.user = sessionStorage.getItem("currentUser") || "";
	}
}
