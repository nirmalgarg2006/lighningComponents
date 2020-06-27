import { LightningElement, api, wire, track } from 'lwc';
import getEmployees from '@salesforce/apex/EmployeeController.getEmployess'

const columns = [
    { label: 'Atos Id', fieldName: 'AtosId__c' },
    { label: 'Name', fieldName: 'Name', type: 'text' },
    { label: 'Phone', fieldName: 'ContactNo__c', type: 'phone' },
    { label: 'Email', fieldName: 'Email__c', type: 'Email' },
];

export default class EmployeeRecords extends LightningElement {
    @api
    emprecords;

    

    @api 
    selectedemployee;

    data=[]; columns = columns;

    @track 
    error;

    @track isModalOpen = false;
    openModal() {
        // to open modal set isModalOpen tarck value as true
        this.isModalOpen = true;
    }
    closeModal() {
        // to close modal set isModalOpen tarck value as false
        this.isModalOpen = false;
    }
    
    @wire(getEmployees)
    getlstEmployess({error, data}){
        if(data){
            this.emprecords = data;
            this.data = data;
            console.log('List of employees : ' + this.employees);
        }
        else if(error){
            this.error = error;
            console.log(this.error);
        }
    }

    handleempclick(event){
        console.log('Selected employee Id ' + event.detail);
        this.selectedemployee = event.detail;
        this.isModalOpen = true;
    }
}