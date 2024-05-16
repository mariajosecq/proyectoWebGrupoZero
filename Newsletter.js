const formNewsLetter = document.querySelector('.formNewsLetter');
formNewsLetter.innerHTML = `
<div class="formNewsLetter">
<div class="imagen"></div>
<div class="formulario">
    <h3>Ingresa tus datos y <br> mantente informado</h3>
    <div class="newsletterinput">
        <label for="nombre">Nombre:</label>
        <input type="text" id="nombre" placeholder=" Ingrese su nombre">
    </div>
    <div class="newsletterinput">
        <label for="apellido">Apellido:</label>
        <input type="text" id="apellido" placeholder=" Ingrese su apellido">
    </div>
    <div class="newsletterinput">
        <label for="email">Email:</label>
        <input type="email" id="email" placeholder=" Ingrese su email">
    </div>
    <div class="newsletterinput">
        <button type="submit" class="btn-acceder">Ingresar</button>
    </div>
</div>
</div>
`;

const popOver = document.querySelector('.avisoNewsLetter');
popOver.innerHTML = `
<div class="aviso">
    <div class="espacio">
        <button id="newsletter">Únete a nuestro newsletter</button>
        <div class="cerrar"><a href="">x</a></div>
    </div>
</div>
`;

document.addEventListener("DOMContentLoaded", function () {

    document.querySelector("#newsletter").addEventListener("click", function () {
        console.log("botón unirse newsletter clicado.");

        document.querySelector(".formNewsLetter").classList.add("abrirform");
    });
});
