import { LightningElement } from 'lwc';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';
import NAME_FIELD from '@salesforce/schema/Account.Name';
import WEB_SITE from '@salesforce/schema/Account.Website';

import ENERGY_OBJECT from '@salesforce/schema/Energy_Audit__c';
import ENERGY_NAME from '@salesforce/schema/Energy_Audit__c.Name';
export default class Lwc4 extends LightningElement {
    accountobject = ACCOUNT_OBJECT;
    myfields = [NAME_FIELD, WEB_SITE];

    handlerAccountCreated(event){
        event.preventDefault();
        alert('Account has been created');
    }

    eneryobject = ENERGY_OBJECT;
    energyfields = [ENERGY_NAME];

    handleeneryresponse(event){
        event.preventDefault();
        alert('Record has been created');
    }
}