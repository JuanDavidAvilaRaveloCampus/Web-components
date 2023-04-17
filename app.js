
import padre from "./componentes/menu.js";


class hijo extends padre{
    #nacionalidad
    constructor({color = 'amarillo'}){
        super ({color});
    };
    set_Nacionalidad(Nacionalidad){
        console.log('hijo');
        this.#nacionalidad  = Nacionalidad;
        return this.#nacionalidad;
    }
}

let ojb = new hijo({})  
console.log(ojb);


