export class Educacion {
    
    idEdu?: number;
    nombreEdu: string;
    carreraEdu: string;
    descripEdu: string;

    constructor(nombreEdu: string, carreraEdu: string, descripEdu: string){
        this.nombreEdu = nombreEdu;
        this.carreraEdu = carreraEdu;
        this.descripEdu = descripEdu;
    }
}