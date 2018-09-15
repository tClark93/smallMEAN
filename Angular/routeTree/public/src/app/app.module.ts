import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { BrandComponent } from './brand/brand.component';
import { CategoryComponent } from './category/category.component';
import { AuthorDetailsComponent } from './author-details/author-details.component';
import { AuthorIDComponent } from './author-id/author-id.component';
import { AllComponent } from './all/all.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ReviewsComponent,
    ProductDetailsComponent,
    BrandComponent,
    CategoryComponent,
    AuthorDetailsComponent,
    AuthorIDComponent,
    AllComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
