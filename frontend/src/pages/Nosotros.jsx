import mesa from "../assets/billar.png";
function Nosotros() {

  return (

    <div className="container mt-5">

      <div className="text-center mb-5">

        <h1 className="display-4">
          🎱 Sobre Nosotros
        </h1>

        <p className="lead">
          Especialistas en mesas y accesorios de billar
        </p>

      </div>

      <div className="row align-items-center">

        <div className="col-md-6">

          <img
  src={mesa}
  className="img-fluid rounded shadow"
  alt="Billar"
/>

        </div>

        <div className="col-md-6">

          <h2>
            Nuestra Historia
          </h2>

          <p className="mt-3">

            En Mesas de Billar Aries nos dedicamos
            a ofrecer productos profesionales para
            amantes del billar.

          </p>

          <p>

            Contamos con mesas premium,
            accesorios y equipamiento de
            alta calidad para jugadores
            principiantes y profesionales.

          </p>

          <p>

            Nuestro objetivo es brindar
            productos de excelente calidad
            con diseños modernos y elegantes.

          </p>

        </div>

      </div>

    </div>

  );

}

export default Nosotros;