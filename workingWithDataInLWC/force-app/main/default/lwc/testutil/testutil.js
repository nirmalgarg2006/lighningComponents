import { LightningElement, track } from 'lwc';
import { showToast,calllogging } from 'c/crmUtility';
import Precdetails from 'c/precdetails';

const columns = [
   
    { label: 'Label', fieldName: 'name', iconname : 'utility:arrowdown', sorting : true },
    { label: 'Website', fieldName: 'website', type: 'url' },
    { label: 'Phone', fieldName: 'phone', type: 'phone' },
    { label: 'Balance', fieldName: 'amount', type: 'currency' },
    { label: 'CloseAt', fieldName: 'closeAt', type: 'date' },
];
export default class Testutil extends LightningElement {
    @track programs = [];
    @track columns = columns;
    
    sayHello(){
        return 'Hello';
    }
    @track displaychild=false;
    
    get getcolpan(){
        return "3";
    }

    handlemouseenter(event){
        let header = event.target.dataset.label;
        calllogging(event);
        this.columns.forEach(k =>{
            if(k.label === header){
                k.sorting = true;
                k.iconname = k.iconname === 'utility:arrowdown' ? 'utility:arrowup' : 'utility:arrowdown';
            }
        })
    }
    handlemouseleave(event){
        let header = event.target.dataset.label;
        this.columns.forEach(k =>{
            if(k.label === header){
                k.sorting = false;
                k.iconname = k.iconname === 'utility:arrowdown' ? 'utility:arrowup' : 'utility:arrowdown';
            }
        })
    }
    handleload(event){
        //alert('hello');
    }
    handleClick(event){
        this.displaychild=!this.displaychild;
        let rowele = this.template.querySelector('[data-id="1"]')
        if(rowele){
            if(rowele.classList.value.includes('hide')){
                rowele.classList.remove('hide');
                rowele.classList.add('show');
            }else{
                rowele.classList.remove('show');
                rowele.classList.add('hide');
            }
            
        }
        event.target.iconName = this.displaychild ? 'utility:arrowdown' : 'utility:arrowup';
    }

    handleClickEvent(event){
        if(event && event?.target){
            showToast(event.target);
        }
    }
    beforeUnloadHandler(event) {
        console.log('before unload handler has been called.');
      }

     
    connectedCallback(){
        
        window.sessionStorage.setItem('name','hello');
        calllogging();
        for(let i = 0 ; i < 100; i++){
            this.programs.push({
                index : i,
                name : 'Hello',
                website : " Hello.com",
                phone : '(1235645353',
                amount : 10,
                closeAt : '10/12/2021',
                IsExpanded : false
            })
        }
    }

    handlescroll(event){
        alert('h');
    }
    renderedCallback(){
        const tables = this.template.querySelectorAll('tbody');
        window.addEventListener("click", this.beforeUnloadHandler.bind(this));
        if(tables){
            tables.forEach(element => {
                element.addEventListener('click', (e) =>{
                    console.log(e.target.tagName);
                })
            });
        }
        const div = this.template.querySelector(".container");
        div.addEventListener("click", (e) => {
          console.log("target", e.target);
          console.log("currentTarget", e.currentTarget);
        });
    }
    
    
}


