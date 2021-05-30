import { api, LightningElement } from 'lwc';

export default class LifeCycleHooks extends LightningElement {
   
    
    constructor(){
        super();
        alert('in Constructor');
    }

    connectedCallback(){
        alert('in connected callback');
    }

    disconnectedCallback(){
        alert('in disconnected callback');
    }

    renderedCallback(){
        alert('in rendered callbak');
    }
}