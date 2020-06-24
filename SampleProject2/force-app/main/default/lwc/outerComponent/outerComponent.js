import { LightningElement, api } from 'lwc';

export default class OuterComponent extends LightningElement {
    @api
    recordId;
    handleaccountcreation(event)
    {
        this.recordId = event.detail;
        //alert(this.recordId);
    }
}