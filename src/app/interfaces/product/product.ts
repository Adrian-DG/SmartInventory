import { from } from "rxjs";
import { ICategory } from '../category/category';

export interface IProduct {
	id: string;
	image: string;
	name: string;
	normal_price: number;
	sell_price: number;
	qty: number;
	categories: ICategory[];
	supplier_id: string;
}
