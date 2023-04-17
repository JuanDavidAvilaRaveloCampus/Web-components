export default class padre {
    #nacionalidad
    constructor({color = 'negro'}){
        this.color = color;
    }
    set_Nacionalidad(Nacionalidad){
        console.log(padre);
        this.#nacionalidad = Nacionalidad;
        return this.#nacionalidad;
    };
    
}; 
