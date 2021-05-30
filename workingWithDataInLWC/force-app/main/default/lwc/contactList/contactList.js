import { LightningElement, track, wire } from 'lwc';
import getContacts from '@salesforce/apex/ContactController.getContacts';
import FIRST_NAME from '@salesforce/schema/Contact.FirstName';
import LAST_NAME from '@salesforce/schema/Contact.LastName';
import EMAIL from '@salesforce/schema/Contact.Email';
import {reduceErrors} from 'c/ldsUtils';
const Columns = [
    { label : 'First Name', fieldName : FIRST_NAME.fieldApiName, type: 'text' },
    { label : 'Last Name', fieldName : LAST_NAME.fieldApiName, type: 'text' },
    { label : 'Email', fieldName : EMAIL.fieldApiName, type: 'Email' }];
export default class ContactList extends LightningElement {

    columns = Columns;
    contacts;
    errors;
    @wire(getContacts)
    contacts;
}