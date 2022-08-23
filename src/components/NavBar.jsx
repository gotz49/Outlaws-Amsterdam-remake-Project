import CartWidget from "./CartWidget";

const Navbar = () => {
	return (
		<header className="header">
			<nav className="menu">
				<ul className="nav-menu">
					<li>
						<a className="active" href="#">
							Home
						</a>
					</li>
					<li>
						<a href="#">Tienda</a>
					</li>
					<li>
						<a href="#">Iniciar Sesion</a>
					</li>
					<li>
						<a href="#">Registrarse</a>
					</li>
				</ul>

				<CartWidget />
			</nav>
		</header>
	);
};

export default Navbar;
