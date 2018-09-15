import { AllComponent } from './all/all.component';
import { CommentComponent } from './comment/comment.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { RestaurantComponent } from './restaurant/restaurant.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'restaurants', component: AllComponent },
  { path: 'restaurants/new', component: CreateComponent },
  { path: 'restaurants/:id/comment', component: CommentComponent },
  { path: 'restaurants/:id', component: RestaurantComponent },
  { path: 'edit/:id', component: EditComponent },
  { path: '', pathMatch: 'full', redirectTo: '/restaurants' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
