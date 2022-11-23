import { Component, OnInit } from '@angular/core';
import { Iproduct } from 'src/app/shared/model/model';
import { ProductsService } from 'src/app/shared/serices/products/products.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
 product!: Iproduct|undefined
 id: number=2
  constructor(private productsService : ProductsService) { }

  ngOnInit(): void {
    this.product = this.productsService.getSingleProduct(this.id)
  }

}
