import { productsService } from './../../shared/services/products.service';
import { Component, OnInit } from '@angular/core';




@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.scss']
})
export class ProductsPageComponent implements OnInit {

  products:any = [];

  constructor(private productsService: productsService) { }

  ngOnInit(): void {
    this.productsService.getProducts().subscribe((res:any) => {
      this.products = res
  })

}
}
