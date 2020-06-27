import { LightningElement, api } from 'lwc';

export default class EmployeeTile extends LightningElement {
    @api
    emp;

    empclick(event){
        event.preventDefault();
        console.log(this.emp.Id);
        const selectevent = new CustomEvent('employeeclick',
        {
            detail : this.emp.Id
        });
        this.dispatchEvent(selectevent);
    }
}