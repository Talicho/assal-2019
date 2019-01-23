import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ExpositoresComponent } from './pages/expositores/expositores.component';
import { BoliviaDetalleComponent } from './pages/bolivia-detalle/bolivia-detalle.component';
import { TurismoDetalleComponent } from './pages/turismo-detalle/turismo-detalle.component';
import { HotelDetalleComponent } from './pages/hotel-detalle/hotel-detalle.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'expositores/:id', component: ExpositoresComponent },
  { path: 'bolivia-detalle', component: BoliviaDetalleComponent },
  { path: 'turismo-detalle', component: TurismoDetalleComponent },
  { path: 'hotel-detalle', component: HotelDetalleComponent },
  { path: '**', pathMatch: 'full', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
