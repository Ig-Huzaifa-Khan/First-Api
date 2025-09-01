fetch('http://localhost:5500/')
  .then(response => response.text())
  .then(data => {
    document.body.innerHTML = `<h1>${data}</h1>`;
  });