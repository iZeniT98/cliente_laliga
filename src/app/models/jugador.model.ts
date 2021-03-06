export class Jugador {

    id_jugador:number;
    nombre:string;
    id_equipo_jugador:number;
    nacimiento:string;
    posicion:string;
    goles:number;
    asistencias:number;
    tarjetas_amarillas:number;
    tarjetas_rojas:number;
    foto:string;
    dorsal:number;

    constructor(id_jugador:number, nombre:string, id_equipo_jugador:number, nacimiento:string, posicion:string, goles:number, asistencias:number, tarjetas_amarillas:number, tarjetas_rojas:number, foto:string, dorsal:number){
        this.id_jugador=id_jugador;
        this.nombre=nombre;
        this.id_equipo_jugador=id_equipo_jugador;
        this.nacimiento=nacimiento;
        this.posicion=posicion;
        this.goles=goles;
        this.asistencias=asistencias;
        this.tarjetas_amarillas=tarjetas_amarillas;
        this.tarjetas_rojas=tarjetas_rojas;
        this.foto=foto;
        this.dorsal=dorsal;


    }
	
}