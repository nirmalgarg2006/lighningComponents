import { LightningElement, track } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent'
import startRequest from '@salesforce/apexContinuation/continutaioncomtroller.startRequest';
import fetchDataHelper from './fetchDataHelper';
const columns = [
    { label: 'User ID', fieldName: 'userId' },
    { label: 'ID', fieldName: 'id' },
    { label: 'Title', fieldName: 'title'},
    { label: 'Completed', fieldName: 'completed' }
];
export default class SampleContinuation extends LightningElement {
    @track outputdata;
    columns = columns;
    @track data = [];
    async connectedCallback() {
        const data = await fetchDataHelper();
        this.data = data;
        console.log(this.data);
    }


    // Imperative Call
    callContinuation() {
        startRequest()
            .then(result => {
                this.outputdata = JSON.parse(result);
                const event = new ShowToastEvent({
                    title: 'Continuation Call',
                    message: 'Continuation Completed',
                    variant: 'success'
                });
                this.dispatchEvent(event);
            })
            .catch(error => {
                const event = new ShowToastEvent({
                    title: 'Continuation Call',
                    message: 'Continuation Error ' + error,
                    variant: 'error'
                });
                this.dispatchEvent(event);
            }
        );
    }
}