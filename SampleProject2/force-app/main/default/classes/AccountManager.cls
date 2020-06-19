@RestResource(urlMapping='/Accounts/*/contacts')
global with sharing class AccountManager {
    @HttpGet
    global static account getAccount()
    {
        RestRequest request = RestContext.request;
        string accountid = request.requestURI.substringbetween('Accounts/','/contacts');
        Account acc = [select id, name, (select id, name from contacts) from account where id =: accountid];
        return acc;
    }
}