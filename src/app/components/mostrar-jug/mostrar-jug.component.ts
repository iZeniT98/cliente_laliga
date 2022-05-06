import { Component, OnInit } from '@angular/core';
import { EMPTY } from 'rxjs';
import { Jugador } from 'src/app/models/jugador.model';
import { SMostrarService } from 'src/app/services/s-mostrar.service';

@Component({
  selector: 'app-mostrar-jug',
  templateUrl: './mostrar-jug.component.html',
  styleUrls: ['./mostrar-jug.component.css']
})
export class MostrarJugComponent implements OnInit {

  jugador:Jugador | any;

  constructor(private servicioMostrar:SMostrarService) { }

  ngOnInit(): void {
    this.servicioMostrar.modificadorMostrarEvent.subscribe((jugador) => {
      this.jugador = jugador;
    });
  }
  limpiar():void{
    //this.servicioMostrar.setJugador(null);
  }

}
