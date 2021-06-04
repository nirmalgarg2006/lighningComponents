import { LightningElement } from 'lwc';

export default class ComponentC extends LightningElement {

    constructor(){
        super();
        //this.template.addEventListener('notify',this.handleClick.bind(this));
    }

    handleClick(event){
        alert('Hello C');
    }

    handleNotify(event){
        alert('Hello Nirmal');
    }
}