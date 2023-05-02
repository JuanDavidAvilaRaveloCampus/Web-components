class list extends HTMLElement {
    constructor () {
        super();

        let shadow = this.attachShadow({mode: 'open'}); 

        //  CREA PARA AGREGAR UN ELEMENTO DE CONTENIDO A LA ETIQUETA YA CREADA
        this.divHeader = document.createElement('div');
        this.divContent = document.createElement('div');
        // this.divHeader.innerHTML = 'hola'
        // AGREGA DICHO ELEMENTO CREADO AL WEBCOMPONENT

        // PARA ACCEDER A LOS ATRIBUTOS ===> si se agrega así para obtener la info, no la va a atomar
        // this.getAttribute('data-title')
        // ya que se queire buscar tomar un valor que no existe

        // para ello primero hay que crearlo o implementarlo

        shadow.appendChild(this.divHeader);
        shadow.appendChild(this.divContent);



    }

    connectedCallback(){
        this.divHeader.innerHTML = `
            <strong>
                ${this.getAttribute('data-title')}
            </strong>
        `;


        let url = this.getAttribute('data-url');
        console.log(url);


        fetch(url)
            .then(response => response.json())
            .then(json => console.log(json));
    }
}
// NO OLVIDAR QUE EL 'app-list' ES LA NUEVA ETIQUETA QUE SE AGREGARÁ EN EL HTML, IMPRORTANTE TENER
// EN CUENTA, QUE NO VA A SERVIR, SI ESTA NO SE AGREGA AL YA MENCIONADO
customElements.define('app-list', list);

// console.log('hola');