import { Injectable } from '@angular/core';
import { Iproduct } from '../../model/model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  products: Iproduct[]=[
    {
      pName: "Samsung",
      pId: 1,
      pStatus: "In Progress"
    },
    {
      pName: "Iphone",
      pId: 2,
      pStatus: "Dispatched"
    },
    {
      pName: "Asus",
      pId: 3,
      pStatus: "Delivered"
    }
  ]
  constructor() { }
  getAllProducts():Iproduct[]{
    return this.products
  }
  getSingleProduct(id:number){
   return this.products.find(ele => ele.pId === id)
  }
}
