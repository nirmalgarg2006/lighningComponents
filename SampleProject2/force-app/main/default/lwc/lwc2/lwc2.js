import { LightningElement, wire, track  } from 'lwc';
import lstAccounts from '@salesforce/apex/AccountController.getAccountList';
export default class Lwc2 extends LightningElement {
    @track accounts;
    @track personname;
    @track selectaccunt;
    @track recordId;
    personname = 'Nirmal';
    @wire(lstAccounts)
    m1({data}){
        if(data)
        {
            this.accounts = data;
        }
    }

    changepersonname(event){
        this.personname = event.target.value;
    }

    firstname = '';
    lastname = '';

    handlechange(event)
    {
        const field = event.target.name;
        if(field === 'firstname'){
            this.firstname = event.target.value;
        }
        else if(field === 'lastname')
        {
            this.lastname = event.target.value;
        }
    }

    get uppercasefullname()
    {
        return `${this.firstname} ${this.lastname}`.toUpperCase();
    }

    displaydetails = false;

    handlecheckbox(event){
        this.displaydetails = event.target.checked;
    }

    handleaccountclick(event){
        this.recordId = event.detail;
        console.log(this.recordId);
        //alert(this.recordId);
        this.selectaccunt = this.accounts.find(acc => acc.Id === this.recordId)
        console.log(this.selectaccunt.Name);
        console.log(this.selectaccunt.Phone);
        console.log(this.selectaccunt.Website);
    }
} 
