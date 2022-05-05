import { Component, Input, OnInit } from '@angular/core';
import { Equipo } from 'src/app/models/equipo.model';

@Component({
  selector: 'app-escudo',
  templateUrl: './escudo.component.html',
  styleUrls: ['./escudo.component.css']
})
export class EscudoComponent implements OnInit {

  @Input() equipo:Equipo = new Equipo(0,"","");
  constructor() { }

  ngOnInit(): void {
  }

}
