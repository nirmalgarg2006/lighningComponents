import { api, LightningElement } from 'lwc';

export default class Ldsrecordviewform extends LightningElement {
    @api
    recordId;

    empName = 'Nirmal Garg';

    handleClick(){
        //alert('Hello');
        this.template.querySelectorAll('.editclick').forEach(item =>{
            item.style.display = "block";
        })
        this.template.querySelectorAll('.editclickclose').forEach(item =>{
            item.style.display = "none";
        })

    }
}