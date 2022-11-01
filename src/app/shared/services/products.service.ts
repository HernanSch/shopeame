import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class productsService {
  url: string = "http://localhost:3000/products";
  product: any = {
    name:"",
    price:"",
    description:"",
    star:"",
    image:""
  }


  constructor(private http: HttpClient) { }

  getProducts() {
    return this.http.get(this.url)
  }

  addProduct(newproduct: any) {
    this.http.post(this.url, newproduct).subscribe()
  }

  getProductById(id: string){
    return this.http.get(this.url + '/' + id);
  }

  editProduct(newproduct: any){
    return this.http.put(this.url + '/' + newproduct.id, newproduct);
  }

  deleteProduct(id: string){
    return this.http.delete(this.url + '/' + id);
  }
}


