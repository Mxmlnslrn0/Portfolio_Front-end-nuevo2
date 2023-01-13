export class experiencia{
    
    idExp?: number;
    empleoExp: string;
    puestoExp: string;
    periodo_unoExp: string;
    periodo_dosExp: string;    
    descripExp: string;
    imgExp: string;

    constructor(puestoExp: string, empleoExp: string,  periodo_unoExp: string,  periodo_dosExp: string, descripExp: string, imgExp: string){
        this.empleoExp = empleoExp;
        this.puestoExp = puestoExp;
        this.periodo_unoExp = periodo_unoExp;
        this.periodo_dosExp = periodo_dosExp;
        this.descripExp = descripExp;
        this.imgExp = imgExp;
    }
}