import { LightningElement } from 'lwc';

export default class ComponentA extends LightningElement {

    handleClick(){
        const notifyevent = new CustomEvent('notify',{bubbles:true, composed:true});
        this.dispatchEvent(notifyevent);
    }
}