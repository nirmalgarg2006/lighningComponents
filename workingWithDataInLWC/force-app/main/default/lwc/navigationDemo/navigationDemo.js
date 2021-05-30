import { LightningElement, wire } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';
export default class NavigationDemo extends NavigationMixin(LightningElement) {
    
    handleNavigate(){
        /*this[NavigationMixin.GenerateUrl]({
            type: 'standard__navItemPage',
            attributes: {
                //Name of any CustomTab. Visualforce tabs, web tabs, Lightning Pages, and Lightning Component tabs
                apiName: 'Working_with_Data'
            },
        }).then(url => {
            this.recordPageUrl = url + '?' + 'c__firstname=NirmalGarg';
            window.open(this.recordPageUrl, '_self');
        });*/
        this[NavigationMixin.Navigate]({
            type: 'standard__navItemPage',
            attributes: {
                apiName: 'Working_with_Data',
                firstname : 'Nirmal',
                lastname : 'Garg', 
                age : 34
            }
        });
    }
}