export class experiencia{
    
    idExp?: number;
    empleoExp: string;
    puestoExp: string;
    //periodoExp: number;
    descripExp: string;

    constructor(puestoExp: string, empleoExp: string, /*periodoExp: number*/descripExp: string){
        this.empleoExp = empleoExp;
        this.puestoExp = puestoExp;
        //this.periodoExp = periodoExp;
        this.descripExp = descripExp;
    }
}