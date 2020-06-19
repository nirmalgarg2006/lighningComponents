import { LightningElement, api } from 'lwc';

export default class MyLWC1 extends LightningElement {
    @api
    message = 'Hello Nirman! How are you doing today?';
}