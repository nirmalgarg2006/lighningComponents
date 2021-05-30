import { LightningElement, wire } from 'lwc';
import {publish, MessageContext} from 'lightning/messageService';
import SAMPLE_CHANNEL from '@salesforce/messageChannel/Sample__c';
export default class LmsPublisherWebComponet extends LightningElement {

    name='';

    @wire(MessageContext)
    messageContext;

    handleSelect(){
        const payload = {message : this.name};
        publish(this.messageContext, SAMPLE_CHANNEL, payload);
    }

    handleChange(event){
        this.name = event.target.value;
        const payload = {message : this.name};
        publish(this.messageContext, SAMPLE_CHANNEL, payload);
    }
}