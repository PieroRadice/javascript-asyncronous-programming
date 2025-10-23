const getTodos = (callback) => {
  const request = new XMLHttpRequest();
  request.addEventListener("readystatechange", () => {
    if (request.readyState === 4 && request.status === 200) {
      //JSON.parse(...) È un metodo integrato in JavaScript che trasforma una stringa JSON valida in un oggetto o array JavaScript.
      const data = JSON.parse(request.responseText);
      callback(undefined, data);
    } else if (request.readyState === 4) {
      callback("dato non recuperabile", undefined);
    }
  });
  request.open("GET", "06.json");
  //request.open("GET", "666.json");
  request.send();
};

getTodos((err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});
