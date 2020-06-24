import { LightningElement, api } from 'lwc';
export default class Lwc5 extends LightningElement {
    @api
    recordId;

    handlesuccess(event){
        alert('Account has been updated');
    }
}