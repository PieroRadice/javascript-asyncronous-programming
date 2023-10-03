//API fetch
/*
fetch() global function
The global fetch() method starts the process of fetching a resource from the network, returning a promise which is fulfilled once the response is available.

The promise resolves to the Response object representing the response to your request.

A fetch() promise only rejects when a network error is encountered (which is usually when there's a permissions issue or similar). A fetch() promise does not reject on HTTP errors (404, etc.). Instead, a then() handler must check the Response.ok and/or Response.status properties.

WindowOrWorkerGlobalScope is implemented by both Window and WorkerGlobalScope, which means that the fetch() method is available in pretty much any context in which you might want to fetch resources.
*/
fetch("https://jsonplaceholder.typicode.com/todos")
  .then((risposta) => {
    console.log("risolto", risposta);
    return risposta.json();
  })
  .then((data) => {
    console.log(data);
    console.log("--------------------");
  })
  .catch((err) => {
    console.log("problemi di rete " + err);
  });
//esercizio: trattare la gestione della risposta quando la risorsa non è stata trovata

