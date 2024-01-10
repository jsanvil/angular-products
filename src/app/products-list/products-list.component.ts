import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgClass,
         UpperCasePipe,
         CurrencyPipe,
         DatePipe
        } from '@angular/common';
import { Product } from '../interfaces/product';
import { ProductFilterPipe } from '../pipes/product-filter.pipe';

@Component({
  selector: 'app-products-list',
  standalone: true,
  imports: [
    NgClass,
    FormsModule,
    UpperCasePipe,
    CurrencyPipe,
    DatePipe,
    ProductFilterPipe
  ],
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.css'
})
export class ProductsListComponent {
  title = 'Mi lista de productos';
  headers = { description: 'Producto', price: 'Precio', available: 'Disponible', image: 'Imagen' };
  showImage = true;

  filterSearch = ''; // Se podría establecer un valor por defecto

  toggleImage(): void {
    this.showImage = !this.showImage;
  }

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
      imageUrl: 'assets/motherboard.png',
      rating: 4
    },
    {
      id: 3,
      description: 'Kingston FURY Beast DDR4 3200 MHz 16GB 2x8GB CL16',
      available: '2023-11-10',
      price: 42.95,
      imageUrl: 'assets/ram.png',
      rating: 3
    }
  ];

  constructor() { }
}
