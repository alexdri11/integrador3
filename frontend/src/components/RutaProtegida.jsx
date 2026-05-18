import {
  Navigate
} from "react-router-dom";

function RutaProtegida({ children }) {

  const admin =
    localStorage.getItem("admin");

  if (!admin) {

    return <Navigate to="/login" />;

  }

  return children;

}

export default RutaProtegida;