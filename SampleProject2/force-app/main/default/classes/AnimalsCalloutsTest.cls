@isTest
public class AnimalsCalloutsTest {
	@isTest static void testGetCallout()
    {
        StaticResourceCalloutMock mock = new StaticResourceCalloutMock();
        mock.setStaticResource('GetAnimalResource');
        mock.setStatusCode(200);
        mock.setHeader('Content-Type', 'application/json;charset=UTF-8');
        Test.setMock(HttpCalloutMock.class, mock);
        HttpResponse results = AnimalsCallouts.makeGetCallout();  
    }
}