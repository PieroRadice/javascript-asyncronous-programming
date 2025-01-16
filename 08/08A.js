//utilizziamo le promise per leggere secondo un ordine ben preciso i vari json presenti in 7
const recuperaRisorsa = (risorsa) => {
  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();
    request.addEventListener("readystatechange", () => {
      if (request.readyState === 4 && request.status === 200) {
        const data = JSON.parse(request.responseText);
        resolve(data);
      } else if (request.readyState === 4) {
        const err = request.status;
        reject(err);
      }
    });
    request.open("GET", risorsa);
    request.send();
  });
};
//resolve e reject sono due funzioni da eseguirs nei casi in cui la promise giunge a buon fine oppure no
//come si possono passare queste funzioni se l'unico parametro che appare nella definizione di recuperaRisorsa è una sola?
//per questo motivo si utilizza la sintassi .then() e .catch() oppure wait e async await
recuperaRisorsa("https://jsonplaceholder.typicode.com/todos")
  .then((data) => {
    console.log(data);
    console.log("1");
    console.log("-------------------------------");
  })
  .catch((err) => {
    console.log("la prima richiesta non è andata a buon fine: " + err);
  });
//come faccio a inanellare le diverse richieste?
recuperaRisorsa("https://jsonplaceholder.typicode.com/todos")
  .then((data) => {
    console.log("inizio");
    console.log(data);
    console.log("prima richiesta eseguita");
    recuperaRisorsa("../07/07C.json")
      .then((data) => {
        console.log(data);
        console.log("seconda richiesta");
      })
      .catch((err) => {
        console.log("la seconda richiesta non è andata a buon fine: " + err);
      });
  })
  .catch((err) => {
    console.log("la richiesta non è andata a buon fine: " + err);
  });
//lo script precedente risulta un pò complicato, specialmente e si cerca di inanellare molte richieste
//possiamo semplificare di molto il codice se riflettiamo sul fatto che la funzione recuperaRisorsa restituisce una promise
//basterà allora far passare la restituzione della promise al livello precedente: vediamo nell'esempio come realizzarlo
recuperaRisorsa("https://jsonplaceholder.typicode.com/todos")
  .then((data) => {
    console.log("inizio 1");
    console.log(data);
    console.log("prima richiesta eseguita");
    return recuperaRisorsa("../07/07C.json");
  })
  .then((data) => {
    console.log("inizio 2");
    console.log(data);
    console.log("seconda richiesta eseguita");
    return recuperaRisorsa("../07/07B.json");
  })
  .then((data) => {
    console.log("inizio 3");
    console.log(data);
    console.log("terza richiesta eseguita");
    return recuperaRisorsa("../07/07A.json");
  })
  .catch((err) => {
    console.log("la richiesta non è andata a buon fine: " + err);
  });
//si noti che un unico catch è sufficiente per raccogliere gli errori derivati dalle diverse chiamate
