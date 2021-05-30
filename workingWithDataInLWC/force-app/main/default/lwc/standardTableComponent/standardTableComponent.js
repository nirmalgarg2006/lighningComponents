import { api, LightningElement } from 'lwc';

export default class StandardTableComponent extends LightningElement {

    @api
    colums;

    @api
    data;

    @api
    tablename

    @api
    isdataloaded
}