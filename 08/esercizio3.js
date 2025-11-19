/*
Definisci tre funzioni:
studia()
faiEsame()
riceviRisultato()

Ognuna restituisce una promessa risolta dopo un breve intervallo con un messaggio diverso.
Esegui le funzioni in sequenza con .then() concatenati, mostrando in console ogni fase.
*/
function studia() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const impegno = Math.random();
      const studiato = Math.round(impegno);
      console.log("impegno ", impegno);
      studiato ? resolve() : reject("Non hai studiato 😴");
    }, 1000);
  });
}

function faiEsame() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const sonoInOrario = Math.round(Math.random() + 0.9);
      if (sonoInOrario) {
        const voto = Math.round(10 * Math.random());
        resolve(voto);
      } else {
        reject("Hai perso il treno 🚉");
      }
    }, 1000);
  });
}

function riceviRisultato(voto) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const promosso = voto > 5;
      resolve(promosso);
    }, 1000);
  });
}

// versione con chiamate annidate
studia()
  .then(() => {
    console.log("Hai studiato! 📚");

    faiEsame()
      .then((voto) => {
        console.log(`Hai preso ${voto}!`);

        riceviRisultato(voto)
          .then((promosso) => {
            console.log(promosso ? "Promosso! 🎉" : "Bocciato 😢");
          })
          .catch((errore) =>
            console.log("Errore durante la ricezione:", errore)
          );
      })
      .catch((errore) => console.log("Errore all’esame:", errore));
  })
  .catch((errore) => console.log("Errore nello studio:", errore));

//versione senza annidamento

studia()
  .then(() => {
    console.log("Hai studiato! 📚");
    return faiEsame();
  })
  .then((voto) => {
    console.log(`Hai preso ${voto}!`);
    return riceviRisultato(voto);
  })
  .then((promosso) => {
    console.log(promosso ? "Promosso! 🎉" : "Bocciato 😢");
  })
  .catch((errore) => {
    console.log("Errore:", errore);
  });

//versione con async await
async function sessioneEsame() {
  try {
    await studia();
    console.log("Hai studiato! 📚");
    const voto = await faiEsame();
    console.log(`Hai preso ${voto}!`);
    const promosso = await riceviRisultato(voto);
    if (promosso) {
      console.log("Sei stato promosso");
      console.log("vado in vacanza");
    } else {
      console.log("Sei stato bocciato");
      console.log("vado in vacanza lavoro");
    }
  } catch (error) {
    console.log("errore ", error);
  }
}

sessioneEsame();
