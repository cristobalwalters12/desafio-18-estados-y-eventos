import Card from "react-bootstrap/Card";
import "../assets/styles/registro.css";
import SocialButton from "./SocialButton";
import Formulario from "./Formulario";
import Alert from "./Alert";
import {
  faFacebook,
  faLinkedinIn,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

function Registro({ alert, validacion }) {
  return (
    <>
      <Card className="card-round-size ">
        <Card.Body>
          <h1>Crear una cuenta</h1>
          <SocialButton icon={faFacebook} />
          <SocialButton icon={faGithub} />
          <SocialButton icon={faLinkedinIn} />
          <h5>o usa tu email para registrarte</h5>
          <Formulario mostrarMensaje={validacion} />
          <Alert variant={alert.variant} text={alert.message} />
        </Card.Body>
      </Card>
    </>
  );
}
export default Registro;
