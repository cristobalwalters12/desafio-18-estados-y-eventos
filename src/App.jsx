import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Registro from "./components/Registro";
import { useState } from "react";
function App() {
  const [alert, setAlert] = useState({ message: "", variant: "" });

  const mostrarError = (mensajeError) => {
    setAlert(mensajeError);
  };
  return (
    <>
      <Registro alert={alert} validacion={mostrarError} />
    </>
  );
}

export default App;
