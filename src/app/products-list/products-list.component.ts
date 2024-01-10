import { Component } from '@angular/core';
import { Product } from '../interfaces/product';

@Component({
  selector: 'app-products-list',
  standalone: true,
  imports: [],
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.css'
})
export class ProductsListComponent {
  title = 'Mi lista de productos';
  headers = { description: 'Producto', price: 'Precio', available: 'Disponible' };

  products: Product[] = [
    {
      id: 1,
      description: 'WD BLACK SN770 2TB NVMe SSD',
      available: '2023-10-03',
      price: 115,
      imageUrl: 'assets/ssd.jpg',
      rating: 5
    }, {
      id: 2,
      description: 'MSI MPG B550 GAMING PLUS ',
      available: '2023-09-15',
      price: 139.90,
      imageUrl: 'assets/motherboard.jpg',
      rating: 4
    },
    {
      id: 3,
      description: 'Kingston FURY Beast DDR4 3200 MHz 16GB 2x8GB CL16',
      available: '2023-11-10',
      price: 42.95,
      imageUrl: 'assets/ram.jpg',
      rating: 3
    }
  ];

  constructor() { }
}
