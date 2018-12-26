import { Component, OnInit } from '@angular/core';
import { DatosService } from '../../services/datos.service';
import { ActivatedRoute } from '@angular/router';
import { ExpositorDescripcion } from '../../interfaces/expositor.detalle.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  expositor: ExpositorDescripcion;
  constructor( private route: ActivatedRoute,
    public datosService: DatosService ) { }

  ngOnInit() {
    this.route.params
      .subscribe(parametros => {
        this.datosService.getExpositor(parametros['id'])
          .subscribe( (expositor: ExpositorDescripcion) => {
            this.expositor = expositor;
          });
      });
  }

}

