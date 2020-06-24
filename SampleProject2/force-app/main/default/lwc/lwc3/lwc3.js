import { LightningElement } from 'lwc';
import strUserId from '@salesforce/user/Id'
export default class Lwc3 extends LightningElement {
    person = {
        name : "Nirmal",
        title : "Developer",
        phone : "9689473429",
        email : "nirmalgarg2006@gmail.com"
    };
    UserId = strUserId;

}