const header =document.querySelector('header');

header.innerHTML = `
   <nav class="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
       <div class="container-fluid d-flex justify-content-between align-items-center">
           <!--Logo-->
           <a href="principal.html">
               <img class="img-logo" src="img/img-principal/logo-blanco.png" alt="LOGO">
           </a>
           <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
               <span class="navbar-toggler-icon"></span>
           </button>
           <!--Desplegables-->
           <div class="collapse navbar-collapse" id="navbarNav">
               <ul class="navbar-nav">
                   <li class="nav-item dropdown">
                       <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                           Categoría
                       </a>
                       <ul class="dropdown-menu">
                           <li><a class="dropdown-item" href="#">Pintura</a></li>
                           <li><a class="dropdown-item" href="#">Escultura</a></li>
                           <li><a class="dropdown-item" href="#">Tejido</a></li>
                           <li><a class="dropdown-item" href="#">Orfebrería</a></li>
                           <li><a class="dropdown-item" href="#">Otros</a></li>
                       </ul>
                   </li>
                   <li class="nav-item dropdown">
                       <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                           Artistas
                       </a>
                       <ul class="dropdown-menu">
                           <li><a class="dropdown-item" href="detalle_autor.html">Daniela Fernández</a></li>
                           <li><a class="dropdown-item" href="detalle_autor2.html">Gabriel Marín</a></li>                                
                           <li><a class="dropdown-item" href="detalle_autor3.html">Sergio Roger</a></li>
                       </ul>
                   </li>
               </ul>
           </div>
           <!--Buscador-->
           <form class="d-flex busqueda" role="search">
               <input class="form-control me-2" type="search" placeholder="Buscar" aria-label="Search">
               <button class="btn btn-outline-success" type="submit">Buscar</button>
           </form>
           <!-- Botón de Iniciar Sesión -->
           <div class="login">
               <button class="btn btn-outline-success me-2" id="mostrar-login" type="button">Iniciar sesion</button>
           </div>
       </div>
   </nav>
`;

const footer =document.querySelector('footer');

footer.innerHTML = `
    <div class="pie">
    <div class="imagenPie">
        <img src="img/img-principal/logo-blanco.png" alt="logo">
    </div>
    <div class="textoPie">
        <u><b><h5>Contacto</h5></u></b>
        <p>Fono:9999999999</p>
        <p>info@grupozero.com</p>
    </div>

    </div>
`;