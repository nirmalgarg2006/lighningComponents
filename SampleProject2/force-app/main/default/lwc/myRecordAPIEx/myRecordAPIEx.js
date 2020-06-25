import { LightningElement, wire, api } from 'lwc';
import {getRecord, getFieldValue} from 'lightning/uiRecordApi'
import NAME_FIELD from '@salesforce/schema/Account.Name';
import OWNER_NAME_FIELD from '@salesforce/schema/Account.Owner.Name';
import PHONE_FIELD from '@salesforce/schema/Account.Phone';
import INDUSTRY_FIELD from '@salesforce/schema/Account.Industry';
export default class MyRecordAPIEx extends LightningElement {
    @api 
    accountId;

    
    @wire(getRecord,{recordId:'$accountId', fields:[NAME_FIELD, INDUSTRY_FIELD], optionalFields:[PHONE_FIELD, OWNER_NAME_FIELD]})
    account;

    get name()
    {
        return getFieldValue(this.account.data, NAME_FIELD);
    } 
}