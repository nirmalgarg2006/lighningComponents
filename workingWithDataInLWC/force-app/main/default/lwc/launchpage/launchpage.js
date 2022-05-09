import { api, LightningElement } from 'lwc';

export default class Launchpage extends LightningElement {
    @api
    setTabDirty=false;

    connectedCallback(){
        window.addEventListener('message', (event)=>{
            this.dispatchEvent(new CustomEvent('closepage'));
        });
        let sfIdent = 'force.com';
        this.url = window.location.href.substring(0, window.location.href.indexOf(sfIdent) + sfIdent.length);
        console.log(this.url);
    }

    get fullUrl() {
        console.log('im here');
        return this.url + '/apex/unsavedchanges_vf?setdirtytab=' + this.setTabDirty;
    }
}