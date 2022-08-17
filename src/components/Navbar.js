
export default function navbar () {
     <header id="header">
        <nav className="menu">
            <div>
                <a className="active" href="index.html">
                    <img className="logo" src="img/menu/logo.png" alt="logo"/>
                </a>
                
            </div>
            <input type="checkbox" id="check"/>
            <label className="navbar" for="check">
                <img src="img/menu/desplegable.png" alt="" width="30px"/>
            </label>
            <ul class="nav-menu">
                <li><a className="active" href="index.html">Home</a></li>
                <li><a href="pages/tienda.html">Tienda</a></li>
                <li><a href="pages/iniciarsesion.html">Iniciar Sesion</a></li>
                <li><a href="pages/registrarse.html">Registrarse</a></li>
            </ul>
        </nav>
     </header>
}

