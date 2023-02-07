import { Component } from '@angular/core';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  public products: Product[] = [
    {
      idProduct : "1",
      productName : "Crédito Inteligente",
      productValue : 3000
    },
    {
      idProduct : "2",
      productName : "Crédito Nómina",
      productValue : 4000
    },
    {
      idProduct : "3",
      productName : "Linea Mujer",
      productValue : 5000
    }
  ];
}
