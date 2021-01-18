import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AngularFireModule } from "@angular/fire/";
import { ReactiveFormsModule } from "@angular/forms";

import { environment } from "../environments/environment";
import { AppComponent } from "./app.component";
import { AuthPageComponent } from "./pages/auth-page/auth-page/auth-page.component";
import { SigninComponent } from "./components/signin/signin.component";
import { SignupComponent } from "./components/signup/signup.component";
import { HomeComponent } from "./pages/home/home.component";

@NgModule({
	declarations: [
		AppComponent,
		AuthPageComponent,
		SigninComponent,
		SignupComponent,
		HomeComponent,
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		AngularFireModule.initializeApp(environment.firebaseConfig),
		ReactiveFormsModule,
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
