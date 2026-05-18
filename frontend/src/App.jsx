import Footer from "./components/Footer";
import ProductoDetalle from "./pages/ProductoDetalle";
import RutaProtegida from "./components/RutaProtegida";
import Nosotros from "./pages/Nosotros";
import Admin from "./pages/Admin";
import "bootstrap/dist/css/bootstrap.min.css";
import LoginCliente from "./pages/LoginCliente";

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";

import Login from "./pages/Login";

import Carrito from "./pages/Carrito";

import {
  CarritoProvider
} from "./context/CarritoContext";

function App() {

  return (

    <CarritoProvider>

      <BrowserRouter>

        <Navbar />

        <Routes>

          <Route
            path="/"
            element={<Home />}
          />

          <Route
            path="/login"
            element={<Login />}
          />

          <Route
            path="/carrito"
            element={<Carrito />}
          />

          <Route
            path="/admin"
            element={
              <RutaProtegida>
              <Admin />
              </RutaProtegida>
         }
        />

          <Route
           path="/nosotros"
            element={<Nosotros />}
          />


        <Route
         path="/producto/:id"
         element={<ProductoDetalle />}
        />

        <Route
         path="/login-cliente"
         element={<LoginCliente />}
        />

        </Routes>

        <Footer />

      </BrowserRouter>

    </CarritoProvider>

  );

}

export default App;