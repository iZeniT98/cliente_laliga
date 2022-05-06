import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EncabezadoComponent } from './components/encabezado/encabezado.component';
import { PieComponent } from './components/pie/pie.component';
import { ListadoJugadoresComponent } from './components/listado-jugadores/listado-jugadores.component';
import { JugadorComponent } from './components/jugador/jugador.component';
import { HttpClientModule } from '@angular/common/http';
import { EscudoComponent } from './components/escudo/escudo.component';
import { ListadoEscudosComponent } from './components/listado-escudos/listado-escudos.component';
import { MostrarJugComponent } from './components/mostrar-jug/mostrar-jug.component';

@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    PieComponent,
    ListadoJugadoresComponent,
    JugadorComponent,
    EscudoComponent,
    ListadoEscudosComponent,
    MostrarJugComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
