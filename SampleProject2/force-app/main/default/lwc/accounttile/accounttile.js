import { LightningElement, api } from 'lwc';

export default class Accounttile extends LightningElement {
    @api account;

    accounttileclick(event){
        event.preventDefault();
        //alert(event.detail.Id);
        //alert(this.account.Id);
        const accountselectevent = new CustomEvent('accountselect',
        {
            detail : this.account.Id
        }
        );
        this.dispatchEvent(accountselectevent);
    }
}