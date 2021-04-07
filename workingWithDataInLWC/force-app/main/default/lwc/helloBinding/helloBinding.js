import { LightningElement } from 'lwc';

export default class HelloBinding extends LightningElement {
    firstname='';
    lastname='';

    handleChange(event){
        const fieldname = event.target.name;
        if(fieldname === 'firstName'){
            this.firstname = event.target.value;
        }
        else if(fieldname === 'lastName'){
            this.lastname = event.target.value;
        }
    }

    get uppercasedFullName(){
        return `${this.firstname} ${this.lastname}`.toUpperCase();
    }

    contacts = [
        {
            Id: 1,
            Name: 'Amy Taylor',
            Title: 'VP of Engineering',
        },
        {
            Id: 2,
            Name: 'Michael Jones',
            Title: 'VP of Sales',
        },
        {
            Id: 3,
            Name: 'Jennifer Wu',
            Title: 'CEO',
        },
    ];
}