public with sharing class demo {
    public demo() {

    }
    @AuraEnabled(cacheable=true)
    public static List<Timeline__c> getDetails(){



        return[
            SELECT
            Id,
            Title__c,
            SubTitle__c,
            Time__c,
            Icon_name__c
            FROM Timeline__c
            ORDER BY Id DESC
            LIMIT 10
        ];
    }
}
