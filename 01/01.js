const posts = [
  { title: "1", body: "questo è il 1° post" },
  { title: "2", body: "questo è il 2ndo post" },
];
//simulo un collegamento al server con un ritardo di 2 secondi per inserire un nuovo post
setTimeout(() => {
  posts.push({ title: "terzo", body: "questo è il terzo post" });
}, 2000);
//espongo i dati andando a leggere nel server il database che contiene dei post
posts.forEach((post) => {
  setTimeout(() => {document.body.innerHTML += `<li>${post.title} ${post.body}</li>`}, Number.parseInt(post.title)*1000);
});

document.body.innerHTML += "<br>Dove si posizionerà questa scritta del primoScript?";
