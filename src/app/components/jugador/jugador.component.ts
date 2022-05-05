import { Component, Input, OnInit } from '@angular/core';
import { Jugador } from 'src/app/models/jugador.model';

@Component({
  selector: 'app-jugador',
  templateUrl: './jugador.component.html',
  styleUrls: ['./jugador.component.css']
})
export class JugadorComponent implements OnInit {

  @Input() jugador:Jugador = new Jugador(0,"","","","",0,0,0,0,"",0)
  constructor() { }

  ngOnInit(): void {
  }

}
