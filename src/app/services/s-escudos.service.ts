import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Equipo } from '../models/equipo.model';

@Injectable({
  providedIn: 'root'
})
export class SEscudosService {

  equipos:Observable<Equipo[]>=new Observable();
  
  constructor(private clientehttp: HttpClient) {
    
  }

  getEquipos(): Observable<Equipo[]> {
    console.log("Obteniendo equipos del servicio web");
    this.equipos = this.clientehttp.get<Equipo[]>("http://localhost:8080/equipos");
    return this.equipos;
  }

}
