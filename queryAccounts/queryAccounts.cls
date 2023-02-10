public with sharing class queryAccounts {
    @AuraEnabled (cacheable=true)
    public static list<Account> queryAccountsMethod() {
        list<Account> accountlist = [SELECT Id , Name FROM Account order by createdDate DESC limit 10];
        return accountlist;
    }

    @AuraEnabled 
    public static list<Account> queryAccountsMethodImperative() {
        list<Account> accountlistImperative = [SELECT Id , Name FROM Account order by createdDate DESC limit 10];
        return accountlistImperative;
    }
}