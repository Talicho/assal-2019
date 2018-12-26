import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Expositor } from '../interfaces/expositor.interface';

@Injectable({
  providedIn: 'root'
})
export class DatosService {

  cargando = true;
  expositores: Expositor[] = [];

  constructor( private http: HttpClient ) {
    this.cargarExpositores();
   }

  private cargarExpositores() {
    this.http.get('https://assal2019-20847.firebaseio.com/expositor.json')
      .subscribe( (resp: Expositor[]) => {
        this.expositores = resp;
        this.cargando = false;
    });
  }

  getExpositor(id: string) {
    return this.http.get(`https://assal2019-20847.firebaseio.com/expositores/${ id }.json`);
  }

}
