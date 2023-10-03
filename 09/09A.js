//API fetch
/*
Ecco come si utilizza l'API fetch quand si vuole concatenare una serie di richieste una dopo l'altra
SI noti che per ciascuna delle richieste sono necessari due then, uno per l'utilizzo del metodo json e l'altro, succcessivamente al metodo appena citato, per le azioni che devono effettivamente essere fatte con i dati
*/
fetch("https://jsonplaceholder.typicode.com/todos")
  .then((risposta) => {
    console.log("risolto", risposta);
    return risposta.json();
  })
  .then((data) => {
    console.log(data);
    return fetch("../07/07C.json");
  })
  .then((risposta) => {
    return risposta.json();
  })
  .then((data) => {
    console.log(data);
    return fetch("../07/07B.json");
  })
  .then((risposta) => {
    return risposta.json();
  })
  .then((data) => {
    console.log(data);
    return fetch("../07/07A.json");
  })
  .then((risposta) => {
    return risposta.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log("problemi di rete " + err);
  });
//si osservi come diventa ripetitivo e anche complicato questo metodo, l'introduzione delle parole chiave async e await