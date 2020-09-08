import { LightningElement, track } from 'lwc';

export default class Calculator extends LightningElement {
   
    num1=0;

   
    num2=0;

    @track
    result=0;

    addnumbers(){
        //alert(this.num2);
        //alert(this.num1);
        this.result = Number(this.num1) + Number(this.num2);
        alert(this.result);
    }

    handlechange(event){
        if(event.target.name === "num1"){
            this.num1 = event.target.value;
        }
        else if(event.target.name === 'num2'){
            this.num2 = event.target.value;
        }
    }
}