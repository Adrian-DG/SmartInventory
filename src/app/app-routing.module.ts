import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { AuthPageComponent } from "./pages/auth-page/auth-page/auth-page.component";
import { HomeComponent } from "./pages/home/home.component";

const routes: Routes = [
	{ path: "home", component: HomeComponent },
	{ path: "auth", component: AuthPageComponent },
	{ path: "", redirectTo: "/auth", pathMatch: "full" },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
