import { ProductType } from './product-type.model';

export interface Product {
  identifiant: string;
  type: ProductType;
  price: number;
  color: string;
  size: number;
  description: string;
}
