import { LightningElement } from 'lwc';

export default class Paginator extends LightningElement {

    handlepre(){
        const prevEvent = new CustomEvent('prev');
        this.dispatchEvent(prevEvent);
    }

    handlenext(){
        const nextEvent = new CustomEvent('next');
        this.dispatchEvent(nextEvent);
    }
}