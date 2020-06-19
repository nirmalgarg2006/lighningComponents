public class AnimalLocator {
	public static string getAnimalNameById(Integer i)
    {
        Http http = new Http();
        HttpRequest request = new HttpRequest();
        request.setEndpoint('https://th-apex-http-callout.herokuapp.com/animals/'+i);
        request.setMethod('GET');
        HttpResponse response = http.send(request);
        System.debug('Response ' + response.getBody());
        Map<string, object> results = new Map<string, object>();
        results = (Map<string,object>)JSON.deserializeUntyped(response.getBody());
        Map<string,object> m2 = new Map<string,object>();
        m2 = (Map<string,object>)results.get('animal');
        system.debug('m2 ' + (string)m2.get('name'));
        //AnimalLocator obj = new AnimalLocator();
        //obj = (AnimalLocator) JSON.deserialize(response.getBody(), AnimalLocator.class);
        
        Animal objanimal = (Animal) JSON.deserialize(response.getBody(), Animal.class);
        return objanimal.name + 'Nirmal Garg';
    }
    
    //public Animal animal { get; set; }
    

}