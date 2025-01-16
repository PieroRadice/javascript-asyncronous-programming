//async await
let recuperaRisorsa = async () => {};
//questo è il metodo per rappresentare una funzione che restituisce una promise con la parola chiave async
console.log(recuperaRisorsa);
//[AsyncFunction: recuperaRisorsa]
console.log(recuperaRisorsa());
//Promise { undefined }: la funzione asincrona, quando viene eseguita restituisce una promise
//proviamo a ricostruire la nostra funzione per utilizzare l'API fetch
recuperaRisorsa = async (risorsa) => {
  fetch(risorsa)
    .then((risposta) => {
      risposta.json();
    })
    .catch((err) => {
      console.log(err);
    });
};
//possiamo utilizzare la parola chiave await per migliorare la leggibilità del codice: invece di utilizzare .then andremo a utilizzare await
recuperaRisorsa = async (risorsa) => {
  const risposta = await fetch(risorsa);
  const data = await risposta.json();
  return data;
};
//ricordiamo che recupera risorsa restituisce una promise, possiamo utilizzare il .then() per elaborare i dati e il .catch() per la gestione dell'errore

recuperaRisorsa = async (risorsa) => {
  const risposta = await fetch(risorsa);
  return await risposta.json();
};

// ancor più brevemente potremmo rappresentare  in una sola riga la funzione:
recuperaRisorsa = async (risorsa) => {
  return await (await fetch(risorsa)).json();
};

//per testare l'errore è sufficiente mettere il vostro pc in modalità aerea o staccare il cavo di rete
recuperaRisorsa("https://jsonplaceholder.typicode.com/todos")
  .then((data) => console.log(data))
  .catch((err) => {
    console.log(err);
  });
//proviamo a inanellare varie richieste di risorse sincronizzando l'ordine di completamento delle funzioni con l'ordine di chiamata

const eseguiSequenza = async () => {
  console.log("Dove finirà questo testo?");
  await recuperaRisorsa("https://jsonplaceholder.typicode.com/todos").then(
    (data) => {
      console.log("A");
      console.log(data);
    }
  );
  await recuperaRisorsa("../07/07C.json").then((data) => console.log(data));
  await recuperaRisorsa("../07/07B.json").then((data) => console.log(data));
  await recuperaRisorsa("../07/07A.json").then((data) => console.log(data));
  console.log("Z");
};
eseguiSequenza()
  .then(console.log("esecuzione terminata"))
  .catch((err) => {
    console.log(err);
  });
//alternativamente, utilizzando le funzioni anonime, richiamandole immediatamente dopo alla loro definizione possiamo scrivere il codice nel modo seguente:
(async () => {
  await recuperaRisorsa("https://jsonplaceholder.typicode.com/todos").then(
    (data) => console.log(data)
  );
  await recuperaRisorsa("../07/07C.json").then((data) => console.log(data));
  await recuperaRisorsa("../07/07B.json").then((data) => console.log(data));
  await recuperaRisorsa("../07/07A.json").then((data) => console.log(data));
})()
  .then(console.log("esecuzione terminata 2"))
  .catch((err) => {
    console.log("l'errore riscontrato è " + err);
  });
