import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './page/home-page/home-page.component';
import { ProductsPageComponent } from './page/products-page/products-page.component';
import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';
import { GalleryComponent } from './shared/components/gallery/gallery.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { UpdatePageComponent } from './page/update-page/update-page.component';
import { StarsComponent } from './shared/components/stars/stars.component';
import { LogoComponent } from './shared/components/logo/logo.component';



@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ProductsPageComponent,
    HeaderComponent,
    FooterComponent,
    GalleryComponent,
    UpdatePageComponent,
    StarsComponent,
    LogoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,



  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
