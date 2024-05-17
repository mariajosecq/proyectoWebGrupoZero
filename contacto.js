document.getElementById("CorreoForm").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent the form from submitting normally

  // Form data
  var formData = {
    sendto: "ma.calderonq@duocuc.cl", //correo al que llegarán los mensajes de la web
    name: document.getElementById("FormControlNombre").value,
    replyTo: document.getElementById("emailapi").value,
    ishtml: "false",
    title: "Contact Form Submission",
    body: document.getElementById("FormControlMensaje").value
  };

  // AJAX settings
  var settings = {
    async: true,
    crossDomain: true,
    url: "https://mail-sender-api1.p.rapidapi.com/",
    method: "POST",
    headers: {
      "content-type": "application/json",
      "X-RapidAPI-Key": "c93d3e38f5msh2ceb44f36f4acdep1b346ajsn916d7262622b",
      "X-RapidAPI-Host": "mail-sender-api1.p.rapidapi.com"
    },
    processData: false,
    data: JSON.stringify(formData)
  };

  // AJAX request
  $.ajax(settings).done(function (response) {
    console.log(response);
    alert("Correo enviado exitosamente!");
    document.getElementById("CorreoForm").reset();
  }).fail(function (jqXHR, textStatus, errorThrown) {
    console.error("Error:", errorThrown);
    alert("Ocurrió un error. Por favor intente más tarde.");
  });
});
