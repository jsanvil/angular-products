import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Product } from '../interfaces/product';
import { ProductFilterPipe } from '../pipes/product-filter.pipe';
import { ProductItemComponent } from '../product-item/product-item.component';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-products-list',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ProductFilterPipe,
    ProductItemComponent
  ],
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.css'
})
export class ProductsListComponent implements OnInit {
  title = 'Mi lista de productos';
  headers = { description: 'Producto', price: 'Precio', available: 'Disponible', image: 'Imagen', rating: 'Valoración' };
  showImage = true;

  filterSearch = '';

  products: Product[] = [];

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.products = this.productService.getProducts();
  }

  toggleImage(): void {
    this.showImage = !this.showImage;
  }
}
