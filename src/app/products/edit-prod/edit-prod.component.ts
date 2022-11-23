import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Iproduct } from 'src/app/shared/model/model';
import { ProductsService } from 'src/app/shared/serices/products/products.service';

@Component({
  selector: 'app-edit-prod',
  templateUrl: './edit-prod.component.html',
  styleUrls: ['./edit-prod.component.scss']
})
export class EditProdComponent implements OnInit {
  product!: Iproduct|undefined
  id:number= 2
  constructor(private productsService: ProductsService, private router: Router, 
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = +this.route.snapshot.params['id']
    this.product = this.productsService.getSingleProduct(this.id)
  }
  goToProducts(){
    this.router.navigate(["/users"], {relativeTo: this.route})
  }
}
