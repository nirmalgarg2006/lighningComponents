import { LightningElement, api} from 'lwc';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';
import NAME_FIELD from '@salesforce/schema/Account.Name';
import WEB_SITE from '@salesforce/schema/Account.Website';

export default class CreateAccountRecord extends LightningElement {
    @api
    accoundid;

    accountobject = ACCOUNT_OBJECT;
    myfields = [NAME_FIELD, WEB_SITE];

    handlerAccountCreated(event){
        event.preventDefault();
        //let results = event.detail;
        this.accoundid = event.detail.id;
        //alert(this.accoundid);
        const selevent = new CustomEvent('accountcreation', {detail:this.accoundid});
        this.dispatchEvent(selevent);
    }
}