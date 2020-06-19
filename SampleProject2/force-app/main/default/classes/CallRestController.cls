public class CallRestController {
	public static void CallRest()
    {
        Http http = new Http();
        HttpRequest request = new HttpRequest();
        request.setEndpoint('https://th-apex-http-callout.herokuapp.com/animals');
        request.setMethod('GET');
        HttpResponse response = http.send(request);
        if(response.getStatusCode() == 200)
        {
            Map<string, object> results = (Map<string,object>) Json.deserializeUntyped(response.getBody());
            List<object> animals = (List<object>)results.get('animals');
            System.debug('Received the following animals');
            for(object animal : animals)
            {
                system.debug(animal);
            }
        }
    }
}