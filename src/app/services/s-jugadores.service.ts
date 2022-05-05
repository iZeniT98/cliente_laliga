import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Jugador } from '../models/jugador.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SJugadoresService {

  jugadores:Observable<Jugador[]>=new Observable();
  
  constructor(private clientehttp: HttpClient) {
    
  }

  getJugadores(): Observable<Jugador[]> {
    console.log("Obteniendo jugadores del servicio web");
    this.jugadores = this.clientehttp.get<Jugador[]>("http://localhost:8080/jugadores");
    return this.jugadores;
  }

}
