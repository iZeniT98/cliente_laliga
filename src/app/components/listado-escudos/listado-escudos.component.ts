import { Component, OnInit } from '@angular/core';
import { Equipo } from 'src/app/models/equipo.model';
import { SEscudosService } from 'src/app/services/s-escudos.service';

@Component({
  selector: 'app-listado-escudos',
  templateUrl: './listado-escudos.component.html',
  styleUrls: ['./listado-escudos.component.css']
})
export class ListadoEscudosComponent implements OnInit {

  equipos:Equipo[] = new Array<Equipo>();

  constructor(private servicioEquipos:SEscudosService) {

  }


  ngOnInit(): void {

    this.servicioEquipos.getEquipos().subscribe(
      equipos => {
        this.equipos = equipos;
      }
    )
  }

}
