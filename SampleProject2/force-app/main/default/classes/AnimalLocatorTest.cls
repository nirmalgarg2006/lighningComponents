@isTest
public class AnimalLocatorTest {
    @isTest static void testCallout()
    {
        Test.setMock(HttpCalloutMock.class, new AnimalLocatorMock());
        string result = AnimalLocator.getAnimalNameById(1);
        string expectedvalue = '';
        system.assertEquals(expectedvalue, result);
    }
}