import { LightningElement, api } from 'lwc';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';
import NAME_FIELD from '@salesforce/schema/Account.Name';
import WEB_SITE from '@salesforce/schema/Account.Website';

export default class CreateAccountRecord extends LightningElement {
    @api
    accountid;

    accountObject = ACCOUNT_OBJECT;
    accountfields = [NAME_FIELD, WEB_SITE];

    handlecreateaccount(event){
        event.preventDefault();
        this.accountid = event.detail.id;
    }
}