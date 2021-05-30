import { LightningElement, wire } from 'lwc';
import queryAccounts from '@salesforce/apex/queryAccounts.queryAccounts'
import { NavigationMixin } from 'lightning/navigation';
export default class AccountFinder extends NavigationMixin(LightningElement) {

    recordId;
    searchKey='';
    accounts;
    error;

    handleChange(event){
        this.searchKey = event.target.value;
    }
    handleSearch(){
        queryAccounts({searchKey : this.searchKey})
        .then((result) =>{
            this.accounts = result;
            this.error = undefined;
        }).catch((error) => {
            this.error = error;
            this.accounts = undefined;
        });
    }

    handleClick(event){
        this.recordId = event.target.name;
        if(this.recordId){
            // View a custom object record.
            this[NavigationMixin.Navigate]({
                type: 'standard__recordPage',
                attributes: {
                    recordId: this.recordId,
                    objectApiName: 'Account', // objectApiName is optional
                    actionName: 'view'
                }
            });
        }
    }
}