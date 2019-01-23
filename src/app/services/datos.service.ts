import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Expositor } from '../interfaces/expositor.interface';
import { Participante } from '../interfaces/participante.interface';
import { Observable } from 'rxjs';
import 'rxjs/Rx';

@Injectable({
  providedIn: 'root'
})
export class DatosService {

  cargando = true;
  expositores: Expositor[] = [];
  fechas: any[] = [];
  participantesURL = 'https://assal2019-20847.firebaseio.com/participantes.json';
  private _jsonURL = 'assets/data/paises.json';
  constructor( private http: HttpClient ) {
    this.cargarExpositores();
    this.cargarFechas();

   }

  private cargarExpositores() {
    this.http.get('https://assal2019-20847.firebaseio.com/expositores.json')
      .subscribe( (resp: Expositor[]) => {
        this.expositores = resp;
        this.cargando = false;
    });
  }

  private cargarFechas() {
    this.http.get('https://assal2019-20847.firebaseio.com/agenda.json')
      .subscribe( (resp: any[]) => {
        this.fechas = resp;
    });
  }

  getAgenda(dia: number) {
    return this.http.get(`https://assal2019-20847.firebaseio.com/agenda/${ dia }/sesiones.json`);
  }

  getExpositor(id: string) {
    return this.http.get(`https://assal2019-20847.firebaseio.com/expositores/${ id }.json`);
  }

  nuevoParticipante(participante: Participante) {
    let body = JSON.stringify( participante );
    let headers = new HttpHeaders({
      'Content-Type' : 'application/json'
    });
    return this.http.post( this.participantesURL, body, { headers });
  }

  getPaises() {
    return this.http.get(this._jsonURL);
  }
}
