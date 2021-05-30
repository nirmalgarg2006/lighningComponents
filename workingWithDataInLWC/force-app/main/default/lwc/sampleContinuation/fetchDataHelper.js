export default function fetchDataHelper(){
    return fetch('https://jsonplaceholder.typicode.com/todos',
    {
        method : 'GET',
        headers: {
            'Content-Type': 'application/json; charset=utf-8',
        }
    }).then(response => response.json()).then(data => console.log(data));
}