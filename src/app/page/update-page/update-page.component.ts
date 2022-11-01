import { productsService } from './../../shared/services/products.service';
import { Component, ComponentFactoryResolver, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-update-page',
  templateUrl: './update-page.component.html',
  styleUrls: ['./update-page.component.scss']
})
export class UpdatePageComponent implements OnInit {
  newProductForm!: FormGroup;
  submitted: boolean = false;

  constructor(private form:FormBuilder, private productService: productsService) { }

  ngOnInit(): void {
    this.newProductForm = this.form.group({
      name: [this.productService.product.name],
      price: [this.productService.product.price],
      description: [this.productService.product.description],
      stars: [this.productService.product.stars],
      image: [this.productService.product.image]
    });
  }

  onSubmit(){
    this.submitted = true;
    if(this.newProductForm.valid){
      const product: any = {
        name: this.newProductForm.get('name')?.value,
        price: this.newProductForm.get('price')?.value,
        description: this.newProductForm.get('description')?.value,
        stars: this.newProductForm.get('stars')?.value,
        image: this.newProductForm.get('image')?.value
      }

      this.productService.addProduct(product)

      this.newProductForm.reset();
      this.submitted = false
    }

  }

}
