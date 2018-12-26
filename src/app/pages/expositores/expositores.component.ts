import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DatosService } from '../../services/datos.service';
import { ExpositorDescripcion } from '../../interfaces/expositor.detalle.interface';

@Component({
  selector: 'app-expositores',
  templateUrl: './expositores.component.html',
  styleUrls: ['./expositores.component.css']
})
export class ExpositoresComponent implements OnInit {

  expositor: ExpositorDescripcion;

  constructor(
    private route: ActivatedRoute,
    public datosService: DatosService
  ) {}

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
