@isTest
global class AnimalLocatorMock implements HttpCalloutMock {
    global HttpResponse respond(HttpRequest request)
    {
        HttpResponse response = new HttpResponse();
        response.setBody('{"animal":{"id":0,"name":"","eats":"","says":""}}');
        response.setStatusCode(200);
        response.setHeader('Content-Type', 'application/json;charset=UTF-8');
        return response;
    }

}