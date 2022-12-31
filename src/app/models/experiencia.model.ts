export class experiencia{
    
    idExp?: Number;
    empleoExp: String;
    puestoExp: String;
    //periodoExp: Number;
    descripExp: String;

    constructor(puestoExp: String, empleoExp: String, /*periodoExp: Number*/descripExp: String){
        this.empleoExp = empleoExp;
        this.puestoExp = puestoExp;
        //this.periodoExp = periodoExp;
        this.descripExp = descripExp;
    }
}