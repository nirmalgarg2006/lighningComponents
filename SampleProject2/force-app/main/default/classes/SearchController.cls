public class SearchController {
    public string accountName{get;set;}
    public List<account> lstaccounts {get;set;}
    public Boolean isAccountFound{get;set;}
    public SearchController()
    {
        isAccountFound = false;
    }
    public PageReference Search()
    {
        lstaccounts = [select id, name from account where name =:accountName];
        if(lstaccounts.size() > 0)
        {
            isAccountFound = true;
        }
        return null;
    }
}