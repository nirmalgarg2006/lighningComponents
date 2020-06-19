public class ParkLocator {

    public static List<string> country(string countryname)
    {
        ParkService.ParksImplPort parkservice = new ParkService.ParksImplPort();
        List<string> lstParks = parkservice.byCountry(countryname);
        return lstParks;
    }
}