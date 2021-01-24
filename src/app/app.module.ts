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
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeTabComponent } from './components/home-tab/home-tab.component';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { ProductTableComponent } from './components/product-table/product-table.component';
import { SupplierFormComponent } from './components/suppliers/supplier-form/supplier-form.component';
import { SupplierTableComponent } from './components/suppliers/supplier-table/supplier-table.component';

@NgModule({
	declarations: [
		AppComponent,
		AuthPageComponent,
		SigninComponent,
		SignupComponent,
		HomeComponent,
		NavbarComponent,
		HeaderComponent,
		HomeTabComponent,
		ProductFormComponent,
		ProductTableComponent,
		SupplierFormComponent,
		SupplierTableComponent,
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
