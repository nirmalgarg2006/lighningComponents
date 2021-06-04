import { LightningElement } from 'lwc';

export default class ComponentB extends LightningElement {
    handleNotify(event){
        alert('Hello');
        alert('Hello B');
    }
}