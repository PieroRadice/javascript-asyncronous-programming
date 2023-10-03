// si noti come la funzione di callback tratti nello stesso modo sia l'errore che il dato ottenuto correttamente
//che cosa succede se dovessimo invece trattare i due parametri in maniera diversa?
//I dati che abbiamo ricevuto li potremmo rappresentare con un documento html invece l'errore lo potremmo visualizzare sulla console
const getTodosCallbackB = (callback) => {
  const request = new XMLHttpRequest();
  request.addEventListener("readystatechange", () => {
    if (request.readyState === 4 && request.status === 200) {
      callback(undefined, request.responseText);
    } else if (request.readyState === 4) {
      callback('errore: '+request.status,undefined);
    }
  });
  request.open("GET", "https://jsonplaceholder.typicode.com/todoss");

  request.send();
};
//
getTodosCallbackB((err, data) => {
    console.log('callback attivata');
  if(err){
    console.log(err);
  }else{
    console.log(data);
  }
});


