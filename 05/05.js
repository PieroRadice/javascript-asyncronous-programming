//racchiudo quello che ho realizzato in 4 all'internod i una funzione 
const getTodos = () => {
  const request = new XMLHttpRequest();
  request.addEventListener("readystatechange", () => {
    if (request.readyState === 4 && request.status === 200) {
      console.log(request, request.responseText);
    } else if (request.readyState === 4) {
      console.log("errore nel reperimento della risorsa");
    }
  });
  request.open("GET", "https://jsonplaceholder.typicode.com/todos");

  request.send();
};
//sarebbe molto utile che la nostra funzione getTodo, che recupera da un server un insieme di dati possa poi farci qualche cosa con questi dati.
getTodos();