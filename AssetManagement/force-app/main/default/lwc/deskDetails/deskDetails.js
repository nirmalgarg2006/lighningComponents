import { LightningElement, wire, track, api } from 'lwc';
import { getPicklistValues } from 'lightning/uiObjectInfoApi';
import { getObjectInfo } from 'lightning/uiObjectInfoApi';
import DESK_OBJECT from '@salesforce/schema/DeskMaster__c'
import BUILDING_FIELD from '@salesforce/schema/DeskMaster__c.Building__c'
import FLOOR_FIELD from '@salesforce/schema/DeskMaster__c.Floor__c'
import WING_FIELD from '@salesforce/schema/DeskMaster__c.Wing__c'
import getavailabledesk from '@salesforce/apex/EmployeeController.getAvailableDesks'
export default class DeskDetails extends LightningElement {

    @track
    buildingvalue;

    @api
    recordId;

    @track
    floorvalue;

    @track
    wingvalue;

    @track
    selectedbuilding;

    @track
    selectedfloor;

    @track
    selectedDesk;

    @track
    selectedwing;

    @wire(getObjectInfo, {objectApiName : DESK_OBJECT})
    deskobjectinfo;

    @wire(getPicklistValues,{recordTypeId : '$deskobjectinfo.data.defaultRecordTypeId',
     fieldApiName : BUILDING_FIELD})
    BuildingPickListValues;

    @wire(getPicklistValues, {recordTypeId : '$deskobjectinfo.data.defaultRecordTypeId', 
    fieldApiName : FLOOR_FIELD})
    FloorPickListValues;

    @wire(getPicklistValues, {recordTypeId : '$deskobjectinfo.data.defaultRecordTypeId',
     fieldApiName : WING_FIELD})
    WingPickListValues;

    handleChange(event)
    {
        //console.log(event.target.name);
        const controlname = event.target.name;
        //console.log(controlname);
        if(controlname === "buildings"){
            this.selectedbuilding = event.detail.value;
            console.log(this.selectedbuilding);
        }
        else if(controlname === "floors"){
            this.selectedfloor = event.detail.value;
            console.log(this.selectedfloor);
        }
        else if(controlname === "wings"){
            this.selectedwing = event.detail.value;
            console.log(this.selectedwing);
        }
    }

    @track
    deskOptions=[];

    records=[];
    showavailabledesk(){
        //alert('Show available desks');
        getavailabledesk({
            building : this.selectedbuilding,
            floor : this.selectedfloor,
            wing : this.selectedwing
        }).then((data) =>
        {
            this.records = data;
            console.log(data[0]);
            //alert(data);
            this.records.forEach(element => {
                console.log(element.Name + ' ' + element.Id + ' ' + element.SeatNo__c);
                this.deskOptions.push({
                    label : element.Name + ' Seat No. ' + element.SeatNo__c,
                    value : element.Id
                })
            });
            console.log(this.deskOptions[0]);
        });
    }
}