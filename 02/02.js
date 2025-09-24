//stampo a video i post in posts
//con setTimeout simulo di andare a leggere i post da un server posizionato in internet con ritardo
{
  const posts = [
    { title: "----primo", body: "-----questo è il primo post di 02.js" },
    { title: "----secondo", body: "-----questo è il secondo post di 02.js" },
  ];

  function getPost() {
    setTimeout(() => {
      posts.forEach((post) => {
        document.body.innerHTML += `<li>${post.title}</li>`;
      });
    }, 1000);
  }
  //scrivo la funzione che mi permette di scrivere su un db un post
  //setTimeout è utilizzata per simulare il tempo necessario a raggiungere il database che potrebbe trovarsi in un server esterno
  function createPost(post) {
    setTimeout(() => {
      posts.push(post);
    }, 2000); //provare con 0 per mostrare che il codice è corretto
  }
  //lancio la funzione per stampare tutti i post
  createPost({ title: "----terzo", body: "----questo è il terzo post" });

  getPost();

  document.body.innerHTML += "<br>-----Dove si posizionerà questa scritta del secondoScript?";
}
//non riesco a ottenere il risultato! sul browser riesco a vedere solamente i primi due post, il terzo non compare.
