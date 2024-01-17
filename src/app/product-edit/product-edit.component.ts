import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { ActivatedRoute, Router, UrlTree } from '@angular/router';
import { Product } from '../interfaces/product';
import { ProductService } from '../services/product.service';
import { ComponentDeactivate } from '../guards/leave-page.guard';

@Component({
  selector: 'app-product-edit',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './product-edit.component.html',
  styleUrl: './product-edit.component.css'
})
export class ProductEditComponent implements ComponentDeactivate {
  product?: Product;
  productImage: string = '';

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private productService: ProductService
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    this.productService.getProduct(id).subscribe({
      next: prod => this.product = prod,
      error: err => console.error(err)
    });
  }

  canDeactivate() {
    return confirm('¿Quiere abandonar la página?. Los cambios no se guardarán.');
  }

  saveChanges() {
    if (this.product) {
      this.productService.updateProduct(this.product).subscribe({
        next: prod => {
          this.product = prod;
          this.router.navigate(['/products', this.product.id]);
        },
        error: err => console.error(err)
      });
    }
  }

  changeImage(fileInput: HTMLInputElement) {
    if (!this.product) { return; }
    if (!fileInput.files || fileInput.files.length === 0) return;

    const reader: FileReader = new FileReader();
    reader.readAsDataURL(fileInput.files[0]);
    reader.addEventListener('loadend', e => {
      this.product!.imageUrl = reader.result as string;
    });
  }
}
