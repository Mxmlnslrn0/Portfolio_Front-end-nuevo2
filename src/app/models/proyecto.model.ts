export class proyecto{

    idPro?:Number;
    nombrePro: String;
    //fechaPro: Number;
    descripPro: String;

    constructor(nombrePro: String, /*fechaPro: Number,*/ descripPro: String){
        this.nombrePro = nombrePro;
        //this.fechaPro = fechaPro;
        this.descripPro = descripPro;
    }

}