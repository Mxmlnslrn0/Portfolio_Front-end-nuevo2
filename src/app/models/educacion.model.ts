export class educacion{
    
    idEdu?: Number;
    nombreEdu: String;
    carreraEdu: String;
    //periodoEdu: Number;
    descripEdu: String;

    constructor(nombreEdu: String, carreraEdu: String, /*periodoEdu: Number*/descripEdu: String){
        this.nombreEdu = nombreEdu;
        this.carreraEdu = carreraEdu;
        //this.periodoEdu = periodoEdu;
        this.descripEdu = descripEdu;
    }
}