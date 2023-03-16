function descargar() {
  const request = new XMLHttpRequest();
      request.open('GET', 'modelo.css', false);
      request.send(null); 
  if (request.status == 200) { 
    let codigoFuente = `<!DOCTYPE html>
    <html>
    <head>
    <style>
    ${request.responseText}
    </style>
    </head>
    <body>
    ${tinymce.activeEditor.getContent()}
    </body>
    </html>`;

    var bl = new Blob([codigoFuente], {type: "text/html"});
    var a = document.createElement("a");
    a.href = URL.createObjectURL(bl);
    a.download = "caleidoscopio.html";
    a.hidden = true;
    document.body.appendChild(a);
    a.innerHTML = "Descargar";
    a.click();
  } 
}
