import React, { useState } from "react";
import { Form, FormControl, FormGroup, Button } from "react-bootstrap";
import Alert from "./Alert";
function Formulario() {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const [alertMessage, setAlertMessage] = useState("");
  const [alertVariant, setAlertVariant] = useState("");

  const validarInputs = (e) => {
    e.preventDefault();
    if (
      nombre === "" ||
      email === "" ||
      password === "" ||
      confirmpassword === ""
    ) {
      setAlertMessage("Todos los campos son obligatorios!");
      setAlertVariant("danger");
    } else {
      setAlertMessage("Registro exitoso");
      setAlertVariant("success");
    }
  };
  return (
    <Form onSubmit={validarInputs}>
      <FormGroup>
        <FormControl
          type="text"
          placeholder="Nombre"
          onChange={(e) => setNombre(e.target.value)}
          value={nombre}
          className="mb-3 mt-3"
        />
        <FormControl
          type="email"
          placeholder="Tuemail@ejemplo.com"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          className="mb-3"
        />
        <FormControl
          type="password"
          placeholder="Contraseña"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          className="mb-3"
        />
        <FormControl
          type="password"
          placeholder="Confirma de contraseña"
          onChange={(e) => setConfirmPassword(e.target.value)}
          value={confirmpassword}
        />
        <Button type="submit" className="mt-3 w-100" variant="success">
          Registrarse
        </Button>
        {alertMessage && <Alert text={alertMessage} variant={alertVariant} />}
      </FormGroup>
    </Form>
  );
}

export default Formulario;
