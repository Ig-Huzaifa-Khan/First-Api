fetch('http://localhost:3000/')
  .then(response => response.text())
  .then(data => {
    document.body.innerHTML = `<h1>${data}</h1>`;
  });