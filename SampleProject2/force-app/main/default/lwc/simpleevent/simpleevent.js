import { LightningElement, track } from 'lwc';

export default class Simpleevent extends LightningElement {
    @track page = 1;

   
    nextclick(){
        this.page = this.page + 1;
    };

    previousclick(){
        if(this.page > 1){
            this.page = this.page - 1;
            //alert(this.page);
        };
    }
}