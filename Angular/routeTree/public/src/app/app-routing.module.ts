import { AllComponent } from './all/all.component';
import { AuthorDetailsComponent } from './author-details/author-details.component'
import { AuthorIDComponent } from './author-id/author-id.component'
import { BrandComponent } from './brand/brand.component'
import { CategoryComponent } from './category/category.component'
import { ProductDetailsComponent } from './product-details/product-details.component'
import { ProductsComponent } from './products/products.component'
import { ReviewsComponent } from './reviews/reviews.component'

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'products', component: ProductsComponent, children: [
    { path: 'details/:id', component: ProductDetailsComponent },
    { path: 'brand/:brand', component: BrandComponent },
    { path: 'category/:cat', component: CategoryComponent }]
},
{ path: 'reviews', component: ReviewsComponent, children: [
    { path: 'details/:id', component: AuthorDetailsComponent },
    { path: 'author/:id', component: AuthorIDComponent },
    { path: 'all/:id', component: AllComponent }]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
