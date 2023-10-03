//in questa sezione facciamo un esempio in cui una callback e una risorsa vengono passate alla stessa funzione
//nota: per non incorrere in problemi CORS utilizzare Go Live per testare il codice
const getTodos = (risorsa, callback) => {
  const request = new XMLHttpRequest();
  request.addEventListener("readystatechange", () => {
    if (request.readyState === 4 && request.status === 200) {
      const data = JSON.parse(request.responseText);
      callback(undefined, data);
    } else if (request.readyState === 4) {
      callback("dato non recuperabile", undefined);
    }
  });
  request.open("GET", risorsa);
  request.send();
};

getTodos("https://jsonplaceholder.typicode.com/todos", (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});

getTodos("07A.json", (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});
getTodos("07B.json", (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});
getTodos("07C.json", (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});

//la sequenza sopra riportata non garantisce che l'esecuzione delle tre chiamate si concludano nell'ordine in cui sono state chiamate
//se uno dei file fosse molto più lungo degli altri lo troveremmo, molto probabilmente, ultimo anche se la chiamata della funzione fosse stata fatta per prima
//infatti nell'esempio il risultato della chiamata della risorsa con http viene rappresentata per ultima e non per prima

//Le callback ci possono aiutare a risolvere questo problema di tempismo, risincronizzando il completamento delle istruzioni con la sequenza con cui sono state chiamate
getTodos("https://jsonplaceholder.typicode.com/todos", (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
  getTodos("07A.json", (err, data) => {
    if (err) {
      console.log(err);
    } else {
      console.log(data);
    }
    getTodos("07B.json", (err, data) => {
      if (err) {
        console.log(err);
      } else {
        console.log(data);
      }
      getTodos("07C.json", (err, data) => {
        if (err) {
          console.log(err);
        } else {
          console.log(data);
        }
      });
    });
  });
});
