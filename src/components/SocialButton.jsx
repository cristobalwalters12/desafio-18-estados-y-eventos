import Button from "react-bootstrap/Button";
import "../assets/styles/socialButton.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function SocialButton(props) {
  return (
    <Button className="button" variant="light">
      <FontAwesomeIcon icon={props.icon} className="icon" />
    </Button>
  );
}

export default SocialButton;
