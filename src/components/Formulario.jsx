import React, { useState } from "react";
import { Form, FormControl, FormGroup, Button } from "react-bootstrap";

function Formulario({ mostrarMensaje }) {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const validarInputs = (e) => {
    e.preventDefault();
    if (
      nombre === "" ||
      email === "" ||
      password === "" ||
      confirmpassword === ""
    ) {
      mostrarMensaje({
        variant: "danger",
        message: "Todos los campos son obligatorios!",
      });
    } else if (password !== confirmpassword) {
      mostrarMensaje({
        variant: "warning",
        message: "Las contraseñas no coinciden",
      });
    } else if (!/^[^\s@]+@[^\s@]+(\.com|\.cl)$/.test(email)) {
      mostrarMensaje({
        variant: "warning",
        message:
          "Por favor, introduce un correo electrónico válido que termine en .com o .cl",
      });
    } else {
      setNombre("");
      setPassword("");
      setEmail("");
      setConfirmPassword("");
      mostrarMensaje({
        variant: "success",
        message: "Registro exitoso",
      });
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
      </FormGroup>
    </Form>
  );
}

export default Formulario;
