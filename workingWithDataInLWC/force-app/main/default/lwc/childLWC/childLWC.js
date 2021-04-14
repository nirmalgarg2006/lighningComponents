import { LightningElement } from 'lwc';

export default class ChildLWC extends LightningElement {
    handleClick(event){
       event.preventDefault();
        const childhtml = this.template.innerHTML;
        const customevent = new CustomEvent('click',{
            detail : childhtml
        });
        this.dispatchEvent(customevent);
    }
    handleParaClick(event){
        console.log(event.target.id);
        const compId = event.target.id;
        this.template.querySelector('#'+compId).className = "hello";
}
}