//promises
const recuperaRisorsaEsempio = () => {
  return new Promise((resolve, reject) => {});
};

//la funzione recupera risorsa restituisce una promessa.
//Per promessa si intendono una serie di azioni da effettuare le quali possono andare
//a buon fine oppure no. Nel caso in cui la promessa va a buon fine saranno eseguite le funzioni resolve e reject presenti come parametro nella promise

let saròPromosso = () => {
  return new Promise((resolve, reject) => {
    if (
      prendoSufficienzaInTutteLeMaterie() &&
      prendoBuonVotoCondotta() &&
      frequentoAlmenoIl75PercentoDelleLezioni()
      //true
    ) {
      resolve();
    } else {
      reject(err);
    }
  });
};

carlo = saròPromosso;
saròPromosso()
  .then(() => {
    miIscrivoScuolaGuida();
    vadoInVacanza();
  })
  .catch(() => {
    lavoroTuttaEstate();
  });
//si noti che le funzioni riportate sotto non sono state create con la modalità const nomeFunzione = (...)=>{.....}
//Le funzioni anonime, attribuite poi a una costante, non vengono riconosciute se sono riportate dopo la loro chiamata
//se invece utilizziamo le funzioni introdotte dalla parola chiave funcion esse godono della proprietà di
function prendoSufficienzaInTutteLeMaterie() {
  return true;
}
function prendoBuonVotoCondotta() {
  // return true;
  return false;
}
function frequentoAlmenoIl75PercentoDelleLezioni() {
  return true;
}
function miIscrivoScuolaGuida() {
  console.log("evviva: iscritto a scuola guida!");
}
function vadoInVacanza() {
  console.log("evviva, vado in vacanza");
}
function lavoroTuttaEstate() {
  console.log(
    "Fantastico, posso studiare per gli esami di riparazione intanto che lavoro"
  );
}

//
