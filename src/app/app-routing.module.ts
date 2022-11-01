import { UpdatePageComponent } from './page/update-page/update-page.component';
import { ProductsPageComponent } from './page/products-page/products-page.component';
import { HomePageComponent } from './page/home-page/home-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:"", component: HomePageComponent},
  {path:"products", component: ProductsPageComponent},
  {path:"update", component: UpdatePageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
