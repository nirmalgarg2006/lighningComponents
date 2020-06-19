public class Page3Controller {

    private ApexPages.StandardController stdController;
    private account acc;
    //public string message{get;set;}
    public Page3Controller(ApexPages.StandardController stdController)
    {
        this.stdController = stdController;
        acc = (Account)this.stdController.getRecord();
    }
    public string pagemessage{get;set;}
    
    public string getmessage()
    {
        return 'hello ' + acc.Name;
    }
    
    public PageReference pageaction()
    {
        pagemessage = 'Hello Page';
        return null;
    }
}