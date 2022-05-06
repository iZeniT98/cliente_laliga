import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Jugador } from 'src/app/models/jugador.model';
import { SMostrarService } from 'src/app/services/s-mostrar.service';

@Component({
  selector: 'app-jugador',
  templateUrl: './jugador.component.html',
  styleUrls: ['./jugador.component.css']
})
export class JugadorComponent implements OnInit {

  @Output() jugadorSeleccionado=new EventEmitter<Jugador>();
  
  @Input() jugador:Jugador = new Jugador(0,"",0,"","",0,0,0,0,"",0)
  constructor(private servicioMostrar:SMostrarService) { }

  ngOnInit(): void {
  }

  enviarJugadorSeleccionado(jugador: Jugador){
    this.servicioMostrar.setJugador(jugador);
  }

}
