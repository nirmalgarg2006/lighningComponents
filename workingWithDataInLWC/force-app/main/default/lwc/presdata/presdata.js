import { LightningElement , track} from 'lwc';

export default class Presdata extends LightningElement {

    predata = [];
    finaldata = [];
    dispplaydetail = false;
    displacounter=[]
    @track childdata;
    connectedCallback(){
        for(let i=0; i< 25; i++)
        {
            this.predata.push({
                key : i,
                value : i
            });
        }

        for(let j=1; j <= this.predata.length;j++){
            if(j%4 == 0){
                this.finaldata.push({
                    detail : true,
                    value : this.predata[j-1],
                    counter : 'counter' + Math.round(j/4)
                });
            }else{
                if(j == this.predata.length)
                {
                    this.finaldata.push({
                        detail : true,
                        value : this.predata[j-1],
                        counter : 'counter' + Math.round((j+1)/4)
                    });
                }else{
                    this.finaldata.push({
                        detail : false,
                        value : this.predata[j-1],
                        counter : 'counter' + Math.round(j/4)
                    });
                }
                
            }
        }

       

        let totaldetailsection = Math.floor(this.predata.length/4) + 1;
        for(let k=1; k <= totaldetailsection; k++){
            this.displacounter.push('details'+k);
        }
        //this.template.querySelector('c-precdetails').generateDetailsSection(this.displacounter);
        console.log(this.finaldata);
    }

    handleClick(event){
        //alert(event.target.dataset.id);
        let divid = event.target.dataset.id;
        //let datakey = event.target.dataset.value;
        //alert(divid/4+1);
        let detailid = Math.floor(divid/4+1);
        let layoutelement = this.template.querySelector('[data-id=counter'+Math.round(detailid)+']');
        if (layoutelement.style.display === "none") {
            layoutelement.style.display = "block";
          }
          //this.dispplaydetail = true;
        this.childdata = this.finaldata[divid];
        //let childcomp = '<c-precdetails details={childdata}></c-precdetails>';
        //this.template.querySelector('[data-value=counter'+Math.round(detailid)+']').innerHTML = '<p>'+this.childdata.value.key +'</p>' + '<p>'+this.childdata.value.value +'</p><p><input variant="success" type="button" value="Click me" onclick="handlebuttonClick(event)"></p>';
        //this.template.querySelector('[data-value=counter'+Math.round(detailid)+']').innerHTML = childcomp;
          this.template.querySelector('c-precdetails').displaydetaildata(this.childdata,'counter'+detailid);
        }
        handlebuttonClick(event){
            event.target.style.display="none";
        }

        closeDetailSection(event){
            let elementId = event.target.dataset.id;
            this.template.querySelector('[data-id='+elementId+']').style.display="none";
        }

        value = 'inProgress';

        get options() {
            return [
                { label: 'New', value: 'new' },
                { label: 'In Progress', value: 'inProgress' },
                { label: 'Finished', value: 'finished' },
            ];
        }
    
        handleChange(event) {
            this.value = event.detail.value;
        }

        get datelabel(){
            return 'Start Date';
        }

        handleload(event){
            console.log(event.target.classList);
        }
        renderedCallback(){
            this.template.querySelectorAll('[data-id=dt1]').forEach( t=>{
                console.log(t);
            })
        }
    }
  
