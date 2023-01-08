export class proyecto{

    idPro?:number;
    nombrePro: string;
    //fechaPro: number;
    descripPro: string;

    constructor(nombrePro: string, /*fechaPro: number,*/ descripPro: string){
        this.nombrePro = nombrePro;
        //this.fechaPro = fechaPro;
        this.descripPro = descripPro;
    }

}