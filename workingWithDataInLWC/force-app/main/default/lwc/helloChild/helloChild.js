import { api, LightningElement } from 'lwc';

export default class HelloChild extends LightningElement {
    @api
    itemName;
}