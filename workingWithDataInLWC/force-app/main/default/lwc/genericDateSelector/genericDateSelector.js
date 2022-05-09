import { LightningElement } from 'lwc';

export default class GenericDateSelector extends LightningElement {
    handleBlue(event){
        alert(event.target.value);
    }
}