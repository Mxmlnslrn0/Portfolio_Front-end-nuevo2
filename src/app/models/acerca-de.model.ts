export class usuario{
    
    idUsu?: number;
    nombreUsu: string;
    oficioUsu: string;
    descripUsu: string;
    imgUsu: string

    constructor(nombreUsu: string, oficioUsu: string, descripUsu: string, imgUsu: string){
        this.nombreUsu = nombreUsu;
        this.oficioUsu = oficioUsu;
        this.descripUsu = descripUsu;
        this.imgUsu = imgUsu;
    }
}

