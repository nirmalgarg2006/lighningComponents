import { api, LightningElement , track} from 'lwc';
const columns = [
    { label: 'Label', fieldName: 'name' },
    { label: 'Website', fieldName: 'website', type: 'url' },
    { label: 'Phone', fieldName: 'phone', type: 'phone' },
    { label: 'Balance', fieldName: 'amount', type: 'currency' },
    { label: 'CloseAt', fieldName: 'closeAt', type: 'date' },
];
export default class Precdetails extends LightningElement {
    @track programs = [];
    columns = columns;

    @track setTabDirty=true;

    renderedCallback(){
        const tables = this.template.querySelectorAll('tbody');
        if(tables){
            tables.forEach(element => {
                element.addEventListener('click', (e) =>{
                    console.log(e.target.tagName);
                })
            });
        }
    } 
    handleClick(event){
        console.log(event.detail);
    }

    constructor(){
        super();
       
    }
    connectedCallback(){
        console.log('hello');
        for(let i = 0 ; i < 20; i++){
            this.programs.push({
                name : 'Hello',
                website : " Hello.com",
                phone : '(1235645353',
                amount : 10,
                closeAt : '10/12/2021'
            })
        }
        window.addEventListener('beforeunload',this.beforeUnloadHandler.bind(this));
    }

    static distance(a,b){
        return a * b;
    }

    beforeUnloadHandler(){
        console.log('before unload');
        return '';
    }

    disconnectedCallback(){
        window.removeEventListener('beforeunload', this.beforeUnloadHandler);
    }
    
}