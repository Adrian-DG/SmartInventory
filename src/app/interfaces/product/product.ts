import { from } from "rxjs";
import { ICategory } from "../category/category";

export interface IProduct {
	id?: string;
	name: string;
	price: number;
	supplier_id: string;
}
