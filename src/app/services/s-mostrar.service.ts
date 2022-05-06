import { EventEmitter, Injectable, Output } from '@angular/core';
import { Jugador } from '../models/jugador.model';

@Injectable({
  providedIn: 'root'
})
export class SMostrarService {
@Output() modificadorMostrarEvent: EventEmitter<Jugador>;
  jugador:Jugador | any;
  constructor() {
    this.modificadorMostrarEvent = new EventEmitter<Jugador>();
  }

  setJugador(jugador:Jugador){
    this.jugador = jugador;
    this.modificadorMostrarEvent.emit(this.jugador)
  }

}
