export class Equipo{

    id_equipo:number;
    nombre_equipo:string;
    foto_equipo:string;

    constructor(id_equipo:number, nombre_equipo:string, foto_equipo:string){
        this.id_equipo=id_equipo;
        this.nombre_equipo=nombre_equipo;
        this.foto_equipo=foto_equipo;
    }
}