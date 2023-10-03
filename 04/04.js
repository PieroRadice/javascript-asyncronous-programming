const request = new XMLHttpRequest();
request.addEventListener("readystatechange", () => {
  if (request.readyState === 4 && request.status === 200) {
    console.log(request, request.responseText);
  } else if (request.readyState === 4) {
    console.log("errore nel reperimento della risorsa");
  }
});
request.open("GET", "https://jsonplaceholder.typicode.com/todos");//riga per il quale il server risponde correttamente
// request.open("GET", "https://jsonplaceholder.typicode.com/todoss");//il server non trova la risorsa cercata
request.send();
