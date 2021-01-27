import { IProduct } from "../product/product";

export interface ISupplier {
	id?: string;
	name: string;
	phone: string;
	email: string;
	user_id?: string;
}
