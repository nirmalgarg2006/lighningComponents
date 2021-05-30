import { LightningElement, wire } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import { CurrentPageReference} from 'lightning/navigation';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';
import NAME_FIELD from '@salesforce/schema/Account.Name';
import REVENUE_FIELD from '@salesforce/schema/Account.AnnualRevenue';
import INDUSTRY_FIELD from '@salesforce/schema/Account.Industry';
export default class AccountCreator extends LightningElement {
    objectApiName = ACCOUNT_OBJECT;
    fields = [NAME_FIELD, REVENUE_FIELD, INDUSTRY_FIELD];
    currentPageReference;
    handleSuccess(event) {
        const toastEvent = new ShowToastEvent({
            title: "Account created",
            message: "Record ID: " + event.detail.id,
            variant: "success"
        });
        this.dispatchEvent(toastEvent);
    }

    currentPageReference = null; 
    urlStateParameters = null;
 
    /* Params from Url */
    firstname = null;
    lastname = null;
    age = null;
 
    @wire(CurrentPageReference)
    getStateParameters(currentPageReference) {
       if (currentPageReference) {
          this.urlStateParameters = currentPageReference.attributes;
          this.setParametersBasedOnUrl();
       }
    }
 
    setParametersBasedOnUrl() {
       this.firstname = this.urlStateParameters.firstname || null;
       this.lastname = this.urlStateParameters.lastname || null;
       this.age = this.urlStateParameters.age || null;
       console.log('First Name - ' + this.firstname);
       console.log('Last Name - ' + this.lastname);
       console.log('Age - ' + this.age);
    }
}