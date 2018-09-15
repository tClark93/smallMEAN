import { AlphaComponent } from './alpha/alpha.component';
import { BrowseComponent } from './browse/browse.component';
import { BuyComponent } from './buy/buy.component';
import { MineComponent } from './mine/mine.component';
import { SellComponent } from './sell/sell.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'home',component: AlphaComponent },
  { path: 'browse',component: BrowseComponent },
  { path: 'buy',component: BuyComponent },
  { path: 'mine',component: MineComponent },
  { path: 'sell',component: SellComponent },
  { path: '', pathMatch: 'full', redirectTo: '/home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
