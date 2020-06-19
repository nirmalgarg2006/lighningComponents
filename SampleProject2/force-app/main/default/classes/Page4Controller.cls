public class Page4Controller {
	private ApexPages.StandardSetController stdController;
    
    public Page4Controller(ApexPages.StandardSetController stdController){
        this.stdController = stdController;
        Account[] records = [select id, name from account limit 1];
        this.stdController.setSelected(records);
    }
}