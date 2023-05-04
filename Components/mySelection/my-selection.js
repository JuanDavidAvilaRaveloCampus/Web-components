let pathName = new URL(import.meta.url).pathname;
let name = pathName.split('/').pop().replace('.js','');

export default class mySelection extends HTMLElement {
    static async Components(){
        return await ( await fetch(pathName.replace('.js','.html'))).text();
    }

    constructor(){
        super();    
        this.attachShadow({ mode : 'open'});
        Promise.resolve(mySelection.Components()).then(html=>{
            this.shadowRoot.innerHTML = html;
            // console.log();
        })
        console.log('im here beatches');
    }
}
customElements.define(name, mySelection);