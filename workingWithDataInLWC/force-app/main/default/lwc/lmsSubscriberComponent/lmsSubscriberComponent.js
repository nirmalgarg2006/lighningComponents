import { LightningElement, wire } from 'lwc';
import {subscribe, MessageContext} from 'lightning/messageService';
import SAMPLE_CHANNEL from '@salesforce/messageChannel/Sample__c';
export default class LmsSubscriberComponent extends LightningElement {
    name='';

    @wire(MessageContext)
    messageContext;

    // Encapsulate logic for LMS subscribe.
    subscribeToMessageChannel() {
        this.subscription = subscribe(
            this.messageContext,
            SAMPLE_CHANNEL,
            (message) => this.handleMessage(message)
        );
    }

    // Handler for message received by component
    handleMessage(message) {
        this.name = message.message;
    }

    // Standard lifecycle hooks used to sub/unsub to message channel
    connectedCallback() {
        this.subscribeToMessageChannel();
    }
}