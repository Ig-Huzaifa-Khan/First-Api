fetch('/api/hello')
  .then(response => response.text())
  .then(data => {
    document.body.innerHTML = `<h1>${data.message}</h1>`;
  })
  .catch(error => {
    document.body.innerHTML = `<h1>Error:${error}</h1>`;
  });