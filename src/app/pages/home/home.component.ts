import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DatosService } from '../../services/datos.service';
import { ActivatedRoute } from '@angular/router';
import { Participante } from '../../interfaces/participante.interface';


// Recuerda instalar npm install --save rxjs-compat para emplear los rxjs

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  agenda: any [] = [];
  paises: any [] = [];
  participante: Participante = {
    name: '',
    dni: '',
    email: '',
    pais: '',
    entidad: ''
  };

  constructor( 
    private route: ActivatedRoute,
    public datosService: DatosService ) { 
      this.datosService.getPaises()
      .subscribe((data: any[]) => {
        this.paises = data
        console.log("Paises:", this.paises);
       });
    }

  ngOnInit() {
    this.agendaDia(0);
  }

  agendaDia(dia: number) {
    this.datosService.getAgenda(dia)
    .subscribe( (resp: any[]) => {
      this.agenda = resp;
    });

  }

  guardar() {
    this.datosService.nuevoParticipante(this.participante)
    .subscribe( data => {
      console.log(data);
    },
    error => console.error(error))
  }

}

