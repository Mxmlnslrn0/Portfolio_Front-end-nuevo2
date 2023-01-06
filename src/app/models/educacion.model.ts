export class Educacion {
    
    idEdu?: number;
    nombreEdu: string;
    carreraEdu: string;
    //periodoEdu: number;
    descripEdu: string;

    constructor(nombreEdu: string, carreraEdu: string, /*periodoEdu: number*/descripEdu: string){
        this.nombreEdu = nombreEdu;
        this.carreraEdu = carreraEdu;
        //this.periodoEdu = periodoEdu;
        this.descripEdu = descripEdu;
    }
}