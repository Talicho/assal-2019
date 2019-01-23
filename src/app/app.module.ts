import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { ExpositoresComponent } from './pages/expositores/expositores.component';
import { DatosService } from './services/datos.service';
import { BoliviaDetalleComponent } from './pages/bolivia-detalle/bolivia-detalle.component';
import { HotelDetalleComponent } from './pages/hotel-detalle/hotel-detalle.component';
import { TurismoDetalleComponent } from './pages/turismo-detalle/turismo-detalle.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ExpositoresComponent,
    BoliviaDetalleComponent,
    HotelDetalleComponent,
    TurismoDetalleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    DatosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
