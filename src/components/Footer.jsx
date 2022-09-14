import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <div className="footer">
        <div className="linea"></div>
        {/* <!-- volver al inicio --> */}

        <Link to="/" style={{ textDecoration: "none", color: "#bababa" }}>
          <h2 className="volver"> Outlaws Amsterdam </h2>
        </Link>

        {/* <!-- Redes sociales --> */}
        <div className="redes">
          <h3>Entérate más de Outlaws Amsterdam en nuestras redes sociales</h3>
          <nav>
            <ul>
              <li className="icono-red">
                <img
                  src="https://gotz49.github.io/Proyecto-Final/img/home/facebook%20logo.jpg"
                  alt="logo de facebook"
                  width="35px"
                />
              </li>
              <li>
                <img
                  src="https://gotz49.github.io/Proyecto-Final/img/home/instagram%20logo.jpg"
                  alt="logo de instagram"
                  width="40px"
                />
              </li>
              <li>
                <img
                  src="https://gotz49.github.io/Proyecto-Final/img/home/tiktok%20logo.jpg"
                  alt="logo de tiktok"
                  width="40px"
                />
              </li>
            </ul>
          </nav>
        </div>
        {/* <!-- Derechos y medios de pago --> */}
        <div className="derechos">
          <p> © 2022 | Todos los derechos reservados </p>
          <p> © OUTLAWS AMSTERDAM </p>
        </div>
      </div>
    </>
  );
}

export default Footer;
