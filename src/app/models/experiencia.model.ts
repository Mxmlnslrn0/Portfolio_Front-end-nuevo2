export class experiencia{
    
    idExp?: number;
    empleoExp: string;
    puestoExp: string;
    descripExp: string;

    constructor(puestoExp: string, empleoExp: string, descripExp: string){
        this.empleoExp = empleoExp;
        this.puestoExp = puestoExp;
        this.descripExp = descripExp;
    }
}