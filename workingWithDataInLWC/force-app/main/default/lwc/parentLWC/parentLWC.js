import { LightningElement } from 'lwc';

export default class ParentLWC extends LightningElement {
    handleClick(){
        const childhtml = this.template.querySelector('c-child-l-w-c')
        console.log(childhtml.innerHTML);
        console.log(this.template.innerHTML);
    }

    handleChild(event){
        const childhtml = event.detail;
        console.log(childhtml);
    }
}