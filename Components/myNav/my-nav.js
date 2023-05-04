let pathName = new URL(import.meta.url).pathname;
let name = pathName.split('/').pop().replace('.js','');

export default class myNav extends HTMLElement {
    static async Components(){
        return await ( await fetch(pathName.replace('.js','.html'))).text();
    }

    constructor(){
        super();    
        this.attachShadow({ mode : 'open'});
        
    }

    handleEvent(e){
        (e.type === 'click') ? this.enviarWorker(e) : undefined;
    }

    enviarWorker(e){
        console.log(e);
        e.preventDefault();
    }


    connectedCallback(){
        Promise.resolve(myNav.Components()).then(html=>{
            this.shadowRoot.innerHTML = html;
            this.myBoton = this.shadowRoot.querySelector('#btn');
            this.myBoton.addEventListener('click', this.handleEvent.bind(this));
            // console.log();
        })
    }
}
customElements.define(name, myNav);