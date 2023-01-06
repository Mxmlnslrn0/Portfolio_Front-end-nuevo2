export class usuario{
    
    idUsu?: number;
    nombreUsu: String;
    oficioUsu: String;
    descripUsu: String;

    constructor(nombreUsu: String, oficioUsu: String, descripUsu: String){
        this.nombreUsu = nombreUsu;
        this.oficioUsu = oficioUsu;
        this.descripUsu = descripUsu;
    }
}

