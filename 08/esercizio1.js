/*
Crea una funzione controllaInternet() che restituisca una promessa:
Se la variabile reteFunziona = true, risolve con il messaggio "Connessione attiva".
Altrimenti la rifiuta con il messaggio "Connessione assente".
Gestisci la promessa con .then() e .catch() stampando il messaggio in console.

Scrivi una funzione scaricaFile() che simula il download di un file con setTimeout.
Dopo 3 secondi deve risolvere con "Download completato!".
Mostra in console un messaggio quando il download è terminato.

3️⃣ – Promessa che fallisce

Crea una funzione faiEsame() che restituisca una promessa:
Genera un numero casuale tra 0 e 1.
Se il numero è maggiore di 0.6 → resolve("Promosso!")
Altrimenti → reject("Bocciato!")
Gestisci il risultato con .then() e .catch().


*/
function controllaInternet() {
  return new Promise((resolve, reject) => {
    //SIMULIAMO LA REALIZZAZIONE DI UNA CONNESSIONE
    setTimeout(() => {
      const connesso = Math.round(Math.random());
      connesso ? resolve() : reject();
    }, 3000);
  });
}

controllaInternet()
  .then(() => {
    console.log("connessione andata a buon fine");
  })
  .catch(() => {
    console.log("connessione fallita");
  });
