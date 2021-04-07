import { LightningElement, wire } from 'lwc';
import queryAccounts from '@salesforce/apex/queryAccounts.queryAccounts'
export default class AccountFinder extends LightningElement {

    
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
        console.log(event);
    }
}