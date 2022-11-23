import { Component, OnInit } from '@angular/core';
import { Iproduct } from '../shared/model/model';
import { ProductsService } from '../shared/serices/products/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products!: Iproduct[]
  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
    this.products = this.productsService.getAllProducts()
  }

}
