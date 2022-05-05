import { Component, OnInit } from '@angular/core';
import { Jugador } from 'src/app/models/jugador.model';
import { SJugadoresService } from 'src/app/services/s-jugadores.service';

@Component({
  selector: 'app-listado-jugadores',
  templateUrl: './listado-jugadores.component.html',
  styleUrls: ['./listado-jugadores.component.css']
})
export class ListadoJugadoresComponent implements OnInit {

  jugadores:Jugador[] = new Array<Jugador>();

  constructor(private servicioJugadores:SJugadoresService) {

  }

  ngOnInit(): void {

    this.servicioJugadores.getJugadores().subscribe(
      jugadores => {
        this.jugadores = jugadores;
      }
    )


  }

}
