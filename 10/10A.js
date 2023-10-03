const recuperaRisorsa = async () => {
  const response = await fetch("../07/07AA.json");
  if (response.status !== 200) {
    throw new Error("risorsa non trovata");
  }
  const data = await response.json();
  return data;
};
recuperaRisorsa()
  .then(data => console.log(data))
  .catch((err) => {
    console.log(err.message);
  });
