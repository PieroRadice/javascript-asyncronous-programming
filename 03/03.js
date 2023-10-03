const request = new XMLHttpRequest();
request.addEventListener("readystatechange", () => {
  console.log(request, request.readyState);
});
request.open("GET", "https://my-json-server.typicode.com/typicode/demo/posts");
request.send();
