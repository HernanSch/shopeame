import { Router } from '@angular/router';
import { productsService } from './../../services/products.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  @Input() list: any= [];

  products:any = [];

  constructor(private productsService: productsService, private router: Router) { }

  edit(id: string) {
    this.productsService.getProductById(id).subscribe((res: any) => {
      this.productsService.product = res;
      this.router.navigate(['/update']);
    });
  }

  delete(id: string) {
    this.productsService.deleteProduct(id).subscribe((res: any) => {
      this.ngOnInit();
      this.router.navigate(['/']);
    });
  }

  ngOnInit(): void {
    this.productsService.getProducts().subscribe((res:any) => {
      this.products = res
  })

}
}
