import React, { useState } from "react";
import { Form, FormControl, FormGroup, Button } from "react-bootstrap";
import Alert from "./Alert"; // Asegúrate de poner la ruta correcta

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
      setAlertMessage("Todos los campos son obligatorios");
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
          placeholder="Enter name"
          onChange={(e) => setNombre(e.target.value)}
          value={nombre}
          className="mb-3 mt-3"
        />
        <FormControl
          type="email"
          placeholder="Enter email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          className="mb-3"
        />
        <FormControl
          type="password"
          placeholder="Enter password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          className="mb-3"
        />
        <FormControl
          type="password"
          placeholder="Confirm password"
          onChange={(e) => setConfirmPassword(e.target.value)}
          value={confirmpassword}
        />
        <Button type="submit" className="mt-3 w-100" variant="success">
          Registrar
        </Button>
        {alertMessage && <Alert text={alertMessage} variant={alertVariant} />}
      </FormGroup>
    </Form>
  );
}

export default Formulario;
