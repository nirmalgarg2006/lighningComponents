@isTest
public class ParkLocatorTest {
	@isTest static void testParks()
    {
        Test.setMock(WebServiceMock.class, new ParkServiceMock());
        List<string> expectedvalues = new List<string>{'Park1','Park2','Park3'};
        List<string> actualvalue = ParkLocator.country('India');
        System.assertEquals(expectedvalues, actualvalue);
    }
}