import { ChicagoComponent } from './chicago/chicago.component';
import { DallasComponent } from './dallas/dallas.component';
import { DcComponent } from './dc/dc.component';
import { SanJoseComponent } from './san-jose/san-jose.component';
import { SeattleComponent } from './seattle/seattle.component';
import { TulsaComponent } from './tulsa/tulsa.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'chicago',component: ChicagoComponent },
  { path: 'dallas',component: DallasComponent },
  { path: 'dc',component: DcComponent },
  { path: 'sanjose',component: SanJoseComponent },
  { path: 'seattle',component: SeattleComponent },
  { path: 'tulsa',component: TulsaComponent },
  { path: '', pathMatch: 'full', redirectTo: '/tulsa' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
