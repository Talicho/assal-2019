import { HomeComponent } from './pages/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExpositoresComponent } from './pages/expositores/expositores.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'expositores', component: ExpositoresComponent },
  { path: '**', pathMatch: 'full', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
