import { api, LightningElement } from 'lwc';

export default class LdsComponent extends LightningElement {
    @api recordId;
    @api objectapiname;
    @api fields = ['AccountId', 'Name', 'Industry', 'Phone', 'AnnualRevenue'];

    connectedCallback(){
        this.recordId = '0015g000006N0K3AAK';
        this.objectapiname = 'Account';
    }

    setcolor(event){
        const element = event.target;
        if(element.className.includes('logging'))
        {
            console.log(element.outerText);
            console.log(element.style.color);
            element.className.add("redColor");
        }
    }
}