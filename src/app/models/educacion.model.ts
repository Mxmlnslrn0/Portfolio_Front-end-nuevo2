export class Educacion {
    
    idEdu?: number;
    nombreEdu: string;
    carreraEdu: string;
    periodo_unoEdu: string;
    periodo_dosEdu: string;
    descripEdu: string;
    imgEdu: string;

    constructor(nombreEdu: string, carreraEdu: string, periodo_unoEdu: string, periodo_dosEdu: string, descripEdu: string, imgEdu: string){
        this.nombreEdu = nombreEdu;
        this.carreraEdu = carreraEdu;
        this.periodo_unoEdu = periodo_unoEdu;
        this.periodo_dosEdu = periodo_dosEdu;
        this.descripEdu = descripEdu;
        this.imgEdu = imgEdu;
    }
}